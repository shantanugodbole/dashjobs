import React from "react";


function JobInformation(props) {
    console.log("Inside Component")
    console.log(props.props);
    return (
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {props.props['Company']}
                </th>
                <td class="px-6 py-4">
                    {props.props['Posting Date']}
                </td>
                <td class="px-6 py-4">
                {props.props['Job Description']}
                </td>
                <td class="px-6 py-4">
                {props.props['Job Location']}
                </td>
                <td class="px-6 py-4">
                    <a href={props.props['Application Link']} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">{props.props['Company']}</a>
                </td>
            </tr>
    );
}

export default JobInformation;