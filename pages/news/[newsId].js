//using bracket to name the file makes it dynamic route

import { useRouter } from 'next/router';


function DetailPage() {
    const router = useRouter();

    const newsId = router.query.newsId;

    return <h1>The Detail Page</h1>
}

export default DetailPage;