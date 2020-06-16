- Visual Studio Code
- NodeJs
- Npm

- Git
- Github -> Phục vụ cho vấn đề Deploy ứng dụng, quản lí mã nguồn tốt hơn
- HerokuApp -> Deploy ứng dụng

- tạo một ứng dụng NextJs cơ bản 
    (create-react-app)
    (create-next-app)




# Các bước Setup Project

## Cài đặt next app 
- npx create-next-app

## Cài đặt Typescript

### Tạo File tsconfig.json và run code
- tsconfig.json
- yarn add --dev typescript @types/react @types/node
- npm run dev

-> File next-env.d.ts sẽ được sinh tự động 
-> Nội dung trong tsconfig.json sẽ được cấu hình tự động

## Tạo thêm config cho images, sass, css
- Tạo file: next.config.js
- https://github.com/vercel/next-plugins

- https://github.com/vercel/next-plugins/tree/master/packages/next-sass
- https://github.com/vercel/next-plugins/tree/master/packages/next-css
- https://github.com/twopluszero/next-images

## Master Layout
- Custom App


- So sánh Authentication và Authorization ?
- Fetch ?
- API Postman



## Giấu đi Endpoint (/member/login.php)
## SetCookie phía Server
## Redirect phía Server (Không dùng Router.push) -> status code header request


1. Login -> /api/login -> Thanh cong 
    -> Redirect sang trang home page
    -> Lay duoc token trong _app.tsx 
        (Server side render get thong tin user trong app)

2. Login -> /api/login -> That bai 
    -> Redirect quay tro lai /login?error=dhsjkhfk
    2.1. Loi Nhap lieu form (Nen xu li phia Client) 
        -> Xu li Truoc Khi Submit

    2.2. Dang nhap that bai (Email sai, Do password sai)
        Email hoac mat khau khong hop le


1. getInitialProps: Chay ca server va client
    1.1 Trong lan load dau tien -> chay server
    1.2 Trong lan load tiep theo (thong qua link cua next/link) -> tro thanh client side


2. Ứng dụng customhook để ngăn chặn user truy cập vào URL nào đó
    Login -> Chỉ được phép truy cập nếu chưa đăng nhập