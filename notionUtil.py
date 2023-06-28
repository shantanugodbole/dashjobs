from notion_client import Client


notion = Client(auth = os.environ["CLIENT_SECRET"])



def writeToNotion(data):
    for i in range(0, len(job_company)):  # Writing to notion Database - no primary keys
        notion.pages.create(
        **{
        "parent":{
            "database_id": os.environ["DATABASE_ID"]
        },
       "properties":{
          "Company":{
              "title": [{
                  "text":{
                      "content": job_company[i]
                  }
              }]
          },
          "Job Location":{
              "rich_text": [{
                  "text":{
                      "content": job_location[i]
                  }
              }]
          },
          "Job Description":{
              "rich_text": [{
                  "text":{
                      "content": job_description[i]
                  }
              }]
          },
          "Posting Date":{
              "rich_text": [{
                  "text":{
                      "content": job_posting_date[i]
                  }
              }]
          },
          "Application Link":{
              "rich_text": [{
                  "text":{
                      "content": job_app_link[i]
                  }
              }]
          }
       }
    }
)

