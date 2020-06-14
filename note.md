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