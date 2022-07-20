addEventListener(
    "fetch",event => {
        let url=new URL(event.request.url);
        url.hostname='bnmlkj-xhudif.cloud.okteto.net';
        let request=new Request(url,event.request);
        event. respondWith(
            fetch(request)
        )
    }
)
