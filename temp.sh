curl --location --request POST 'http://buzz-visionwx-1271868819.us-east-1.elb.amazonaws.com:8001/crawl?url=https://www.chartgpt.dev/buy-credits&tag=base-case' \
--header 'User-Agent: Apifox/1.0.0 (https://apifox.com)' \
--header 'Content-Type: application/json' \
--header 'Accept: */*' \
--header 'Host: buzz-visionwx-1271868819.us-east-1.elb.amazonaws.com:8001' \
--header 'Connection: keep-alive' \
--header 'Origin: http://localhost:3000' \
--data-raw '{
    "url": "https://www.notion.so",
    "params": {
        "window_size": [
            1920,
            1080
        ],
        "wait_for_element": "",
        "wait_for_seconds": 3,
        "metadata": true,
        "text": false,
        "async_save": false,
        "first_screen": false,
        "full_screen": false,
        "html": false
    }
}'
