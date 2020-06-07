import React from "react";
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { InferGetStaticPropsType } from 'next'

const BASE_URL = "http://api-meme-zendvn-01.herokuapp.com/api"

type PostType = {
    PID: string;
    post_content: string;
}
type PropsType = {
    posts: PostType[]
}

type PagePropsType = React.FC<InferGetStaticPropsType<typeof getStaticProps>>

const DemoGetStaticProps: PagePropsType = ({ posts }) => {
   
    return (
        <div className="container">
            <h1>Demo getStaticProps</h1>
            <Link href="/playground/getStaticProps/test">
                <a>Di chuyen qua trang Test</a>
            </Link>
            <ul>
                {
                    posts.map((post) => {
                        return <li key={post.PID}>{post.post_content}</li>
                    })
                }
            </ul>
        </div>
    )
}

// Khong lien quan gi toi NextJs -> La kien thuc cua ReactJs thuan
DemoGetStaticProps.defaultProps = {
    posts: []
}

/*

Next/link

1. getInitialProps -> trực tiếp gọi sang API của herokuapp

2. getServerSideProps
    -> Gọi APi vào Server NextJs  **** Bước trung gian này do NextJs làm tự động cho mình
    -> Server NextJs -> Gọi sang API của HerokuApp
        -> Che giấu được API phía herokuapp

3. getStaticProps
    -> Gọi API lên phía Heroku 1 lần duy nhất trong thời điểm build code (yarn build)
    -> Sau khi build đưa lên môi trường production 
        -> Khi truy cập vào nó như là một static page (html tĩnh)
        -> Dữ liệu đã có sẵn rồi. -> Không gọi API lần nữa (Được cached)

    - Ưu điểm: Thời gian load trang rất nhanh
    - Nhược điểm: Nếu dữ liệu của API đó bị thay đổi trên herokuapp 
        -> Ứng dụng của mình sẽ không cập nhật được dữ liệu mới đó
        -> Nếu muốn có dữ liệu mới phải build lại

4. getStaticPaths -> Phai ket hop di chung voi getStaticProps
    - List bai viet
        -> Trong lần build code -> Biết được rõ ràng API nào được gọi trước (API get list posts)

    - Có những trang dùng Dynamic Routing
        + Ví dụ như trang bài viết chi tiết

        Ví dụ URL: /post/[id].tsx
            id = 20 -> Goi APi get bai viet co id 20
            id = 30 -> Get API get bai viet co id 30

    Giả sử trên Server HerokuApp có 5 bài viết: id = 20, 30, 40, 50, 60

    Dung thằng getStaticPaths 
        return {
            paths: [
                { params: { id: 20 } },
                { params: { id: 30 } }
            ],
            fallback: false (Link du phong = false)
        }
        -> Nếu User truy cập vào URL khác id 20 và 30 -> Không có link dự phòng -> Đẩy ngay qua trang 404

        Nếu khai báo fallback: true 

*/
export const getStaticProps: GetStaticProps<PropsType>  = async (context) => {
    const response = await fetch(BASE_URL + '/post/getListPagination.php?pagesize=5&currPage=1');
    const data = await response.json();

    const props = {
        posts: data.posts
    }

    return {
        props
    }
}

export default DemoGetStaticProps;