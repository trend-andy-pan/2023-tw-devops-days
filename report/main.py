import pymongo
import os
import cairosvg
from datetime import datetime
import csv
from react.render import render_component

mongo_str = ""

with open('./roadmap_png/report.csv', 'w', encoding='UTF8', newline='') as f:
    writer = csv.writer(f)

    writer.writerow([
        'idx',
        'id',
        'name',
        'email',
        'company',
        'formId',
    ])


mg_client = pymongo.MongoClient(mongo_str)
mg_db = mg_client["2023-tw-devops-day"]
mg_col = mg_db["result"]

data = mg_col.find({})
idx = 0
for document in list(data):
    result = document
    result['_id'] = idx
    result['questionnaires']['_id'] = int(datetime.strptime(
        result['time'], "%Y-%m-%dT%H:%M:%S.%fZ").timestamp() * 1000)
    questionnaires = result['questionnaires']

    print(result)

    rendered = render_component(
        os.path.join(os.getcwd(), 'jsx', 'DevopsRoadmap.jsx'),
        {
            'answers': questionnaires,
        },
    )

    print(rendered)

    png_data = cairosvg.svg2png(
        bytestring=str(rendered).encode('utf-8'), write_to=f"./roadmap_png/roadmap_{questionnaires['_id']}_{result['name']}.png"
    )

    with open('./roadmap_png/report.csv', 'a', encoding='UTF8', newline='') as f:
        writer = csv.writer(f)

        writer.writerow([
            idx,
            result['questionnaires']['_id'],
            result['name'],
            result['email'],
            result['company'],
            result['formId'],
        ])

    idx += 1
