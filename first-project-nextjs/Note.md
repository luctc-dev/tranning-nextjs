# API Là gì? 

## Aplication Programming Interface
    -> Giao diện lập trình ứng dụng
    -> Giúp ứng dụng của mình tương tác với "ứng dụng của người khác"
        -> Thư viện ở bên ngoài ..
        -> Hệ thống Back End ..
        ...

        -> Function
        -> props
        -> Component 
        -> ...

        -> API Gửi dữ liệu lên Server -> Và nhận data trả về (Dạng URL)

## UI -> User Interface 
    -> Giao diện người dùng 
    -> Logic Javascript

    -> Đứng ở góc độ của người dùng
    -> Giúp người dùng tương tác với ứng dụng của mình nó dễ dàng hơn.
    -> Không cần quan tâm ứng dụng của mình viết như thế nào. 


# Server Side Rendering

## getInitialProps
    - Chạy cả phía Server và Client
    - Lần load đầu tiên chạy phía Server
    - Lần điều hướng tiếp theo (next/link, next/router) chạy phía Client (SPA)

    - Ưu điểm: Tốt cho SEO. Giảm tải phía Server.
    - Nhược điểm: Dễ bị lộ Endpoints về data của API. Nếu ưu tiên ở di động hơn, các thiết bị có cấu hình yếu -> Không nên dùng.

## getServerSideProps -> Fetch data trong mỗi request 
    - Chỉ chạy phía Server
    - Lần load đầu tiên chạy phía Server
    - Lần điều hướng tiếp theo (next/link, next/router) vẫn chạy phía Server
    
    - Ưu điểm: Tốt cho SEO. Che giấu được Endpoints
    - Nhược điểm: Tốc độ ứng dụng sẽ chậm hơn với những lần sau. Tăng tải phía Server. 

------------------------------------------

# Static Generation

## getStaticProps -> Fetch data tại thời điểm build time
    - Chỉ chạy phía Server
    - Ở môi trường Development: Giống hoàn toàn getServerSideProps
    - Ở môi trường Production: 
        + Data được gọi một lần duy nhất tại build time.
        + Data không thay đổi trong suốt thời gian hoạt động (Nếu không Re Build Project)
    
    - Ưu điểm: Tốt cho SEO. Tốc độ tải cực nhanh tại một thời điểm nhất định
    - Nhược điểm: 
        Không nhận được dữ liệu thay đổi mới nhất trong Database nếu không Re Build

## getStaticPaths -> Xác định cụ thể các dynamic routes nào được pre-render phía server.
    - Chỉ chạy phía Server
    - Dùng kết hợp với getStaticProps khi đó là dynamic routes