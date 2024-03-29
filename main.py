# -*- coding: utf-8 -*-
"""DashJobs_v3.ipynb

Automatically generated by Colaboratory.

"""

import requests
from bs4 import BeautifulSoup
import math
import requests
import os

from supabase import create_client, Client
# from notionUtil import writeToNotion



# supabaseConnection = connectSupabase()
url = os.environ["SUPABASE_URL"]
key = os.environ["SUPABASE_ID"]
Client = create_client(url, key)


target_url='https://www.linkedin.com/jobs/search/?keywords=sde%20intern&geoId=103644278&start={}'
l =[]
job_company = []
job_location = []
job_description = []
job_posting_date = []
job_app_link = []
for i in range(0,math.ceil(300/25)):

    res = requests.get(target_url.format(i*25))
    soup=BeautifulSoup(res.text,'html.parser')
    alljobs_on_this_page=soup.find_all("li")

    for x in range(0,len(alljobs_on_this_page)):
      jobid = alljobs_on_this_page[x].find("div",{"class":"base-card"})
      # print(type(jobid))
      l.append(jobid)

l = [*set(l)]

for i in range(0, len(l)):
  company = l[i].find("h4", {"class":"base-search-card__subtitle"}).text.strip()
  job_company.append(company)
  location = l[i].find("span", {"class":"job-search-card__location"}).text.strip()
  job_location.append(location)
  description = l[i].find("h3", {"class":"base-search-card__title"}).text.strip()
  job_description.append(description)
  posting_date = l[i].find("time")["datetime"]
  job_posting_date.append(posting_date)
  link = l[i].find("a" ,{"class":"base-card__full-link"})["href"]
  job_app_link.append(link)


for i in range(0, len(job_company)):  # Writing to supabase table - POSTGRES. Primary key = Company + Job Location + Link
    data, count = Client.table('JobListings').upsert({"Company": job_company[i], "Job Location": job_location[i], "Job Description":job_description[i], "Posting Date": job_posting_date[i], "Application Link": job_app_link[i]}).execute()


# writeToNotion(data)
