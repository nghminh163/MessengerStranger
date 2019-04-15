# Messenger Stranger
## Giới thiệu
Chắc hẳn ai trong chúng ta cũng đã một lần sử dụng Chatible hay mới hơn là Profoundly rồi phải không? Mình cũng hay sử dụng để tìm bạn (:< Coder cô đơn lắm). Đã có lúc mình nảy ra ý tưởng, tại sao không làm 1 chú Chatbot giống vậy ở trường mình (:3 ở trường dễ gặp nhau hơn :D có duyên thì đấy đấy =)) ) nên mình quyết định viết lại nó ở Project này

## Tính năng
- [x] Gửi tin nhắn văn bản
- [ ] Gửi hình, video, voice
- [x] Ghép cặp và gửi tin nhắn
- [x] Ghép cặp theo giới tính
- [x] Sử dụng cache để tạo phòng chờ -> Optimize
- [x] Sử dụng cache để lưu những cặp đã ghép -> Optimize
- [ ] Vân vân tính năng có thể issue thêm =))

## Điều kiện:
- Có 1 tài khoản Heroku đã add thẻ (bạn có thể sử dụng Viettel Pay hay True Money để tạo thẻ nếu chưa làm thẻ)
- Có page :3 là nhà của chú chatbot này

## Hướng dẫn cài đặt 
- Mình sử dụng ngay chính nền tảng Messenger Platform để cải thiện tốc độ vì bây giờ Messenger đã cho phép cá nhân có thể tạo Chatbot

B1. Tạo app như hướng dẫn [sau](https://github.com/nghminh163/MessengerStranger/blob/master/AppReview.md)

B2. Lấy token page như sau:

Chọn trang của bạn và click vào "Chỉnh sửa quyền"
![](https://scontent.fhan2-4.fna.fbcdn.net/v/t1.15752-9/57154466_270238913854668_2976337788380643328_n.png?_nc_cat=104&_nc_oc=AQn_52YQlcSOry0vcuLKCO_qq_leURrYrMoLUhkMHu8jr3VS6OyAJz8Z8K4m20vCkhY&_nc_ht=scontent.fhan2-4.fna&oh=36a9b481bd256a33f1c96bbaae065a5c&oe=5D2E8E31)

![](https://scontent.fhan2-2.fna.fbcdn.net/v/t1.15752-9/57286255_798716700500092_952922375328890880_n.png?_nc_cat=111&_nc_oc=AQlxu2dFVsKWP6hhnLxhpwwBGiD0IjKPXjTw9r9nuF_vfLhW9VVcJclvuNxhdV38Ev0&_nc_ht=scontent.fhan2-2.fna&oh=a85f20bb39fb3f6016656e0334ad12c9&oe=5D45035F)

![](https://scontent.fhan2-3.fna.fbcdn.net/v/t1.15752-9/56887216_1061445270645765_5258572672333250560_n.png?_nc_cat=108&_nc_oc=AQmBYUlRBi89B2Ee4AT-tOC8wecEaqoRRSOd9IOVh9jedi4XmOpiyA5uHCtMGZK7niA&_nc_ht=scontent.fhan2-3.fna&oh=1966e8dc79c41f5a5c8377d713268fce&oe=5D3DAE99)

![](https://scontent.fhan2-3.fna.fbcdn.net/v/t1.15752-9/57462736_282500102655608_5724829326940045312_n.png?_nc_cat=107&_nc_oc=AQnzG1nSjIm57pGmFWRFK1rPOcktDk1cqlhszu3coiptx7FbuiEI6PKWrGPObR3tvdA&_nc_ht=scontent.fhan2-3.fna&oh=9ab52dd14f503498d20e81834482f434&oe=5D311612)

![](https://scontent.fhan2-4.fna.fbcdn.net/v/t1.15752-9/57209228_417808635443831_8997076442026082304_n.png?_nc_cat=110&_nc_oc=AQlD60GBTrkUqnP2H_OAtgWQ1zKh9vOQZbZZe84P6baxnhyf03N7i92GgBSBZrpt960&_nc_ht=scontent.fhan2-4.fna&oh=0b5c660ee6d3a7f7a3faf3def90df31e&oe=5D31AEA9)

Click vào token để copy
![](https://scontent.fhan2-4.fna.fbcdn.net/v/t1.15752-9/57133794_2340818025975735_1570912167144718336_n.png?_nc_cat=110&_nc_oc=AQniOBQSmyAe1pMRVptQ5TJjUTB_wqQ_ANvRtlq3b75R1kzVarVmN73qxrDlUpTzHgs&_nc_ht=scontent.fhan2-4.fna&oh=7a1cd675a503420b197067a2f4ddc930&oe=5D46B942)

B3. Sau khi chuẩn bị xong 1 tài khoản Heroku có add thẻ thành công hãy bấm "Deploy to Heroku" ở dưới đây
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

Nó sẽ lên như sau
![](https://scontent.fhan2-4.fna.fbcdn.net/v/t1.15752-9/56920179_1223214104527726_7757715752764833792_n.png?_nc_cat=110&_nc_oc=AQmu4V3vku4Uyc9pGb49zYBCYSp7Y-HAXrLWsB9JYAlzETfgc4Zbc7qJRsV7k9RRFt4&_nc_ht=scontent.fhan2-4.fna&oh=0a6f7f87653ed6c2559e8cfb2b6227df&oe=5D349201)

Ở phần Config vars, paste token của page lấy ở b2 vào đây rồi bấm deploy app. Hãy chờ 1 lúc để app được deploy

B4. Sau khi chạy xong bấm View để kiểm tra, lên như sau là thành công
![](https://scontent.fhan2-3.fna.fbcdn.net/v/t1.15752-9/57240534_2285119348443291_7699997306476560384_n.png?_nc_cat=108&_nc_oc=AQneHqRO6YrGL0Juzj08T5HS4R1RO7WaV4iBv6XI40_NYCqtwSmUt9MOsO44ZSj7m6o&_nc_ht=scontent.fhan2-3.fna&oh=e3715a2994be80e8954079962d782b66&oe=5D45C4CB)
Copy lại url này lại, qua bên app ở Messenger vừa tạo ở b1. Chọn "Đăng kí theo dõi sự kiện ở Webhook"
![](https://scontent.fhan2-4.fna.fbcdn.net/v/t1.15752-9/57319814_308720616471994_3706781416122482688_n.png?_nc_cat=110&_nc_oc=AQnSl-SWHi1S2Wa1acZ7YuHIATleKwqzxiMcDxbkT_nHsaWhTGIILNYeIuuMhb_hZso&_nc_ht=scontent.fhan2-4.fna&oh=ed130dfd77ebe2f5ee491fc1de21f012&oe=5D361285)
Tích như hình giúp mình
![](https://scontent.fhan2-4.fna.fbcdn.net/v/t1.15752-9/57010194_650806502055027_7229297259093950464_n.png?_nc_cat=104&_nc_oc=AQlthvnd4N5LdJeEDP-1tFPOCgy3F81fL_7Z-fxaEb_F5RFt9Pr8xM0rrqnhWLEdKNI&_nc_ht=scontent.fhan2-4.fna&oh=6e60b37cee125c35549ea70b0948537f&oe=5D2B9120)

- Url gọi lại là cái url heroku của app mình bảo bạn copy trên rồi thêm /webhook
Ví dụ của mình là https://chatibletest.herokuapp.com/ thì url gọi là của mình sẽ là https://chatibletest.herokuapp.com/webhook

- Mã xác minh mặc định là VerifyToken

- Tích 2 mục *messages* và *messaging_postbacks*, lưu ý chỉ 2 mục này và bấm "Xác minh và lưu"

Rồi bạn có thể vào page của mình để test :D Nếu có vấn đề gì hãy issue mình ở bên Github hoặc có thể Comment trực tiếp vào post mình up mình sẽ cố gắng giải đáp sớm nhất

## Vài lời cuối
Hiện tại mình khá bận nên làm Heroku cho nhanh sắp tới mình sẽ có thể hướng dẫn làm trên VPS cá nhân và làm thành 1 file pdf nó chuyên nghiệp hơn. Cảm ơn đã ủng hộ mình
:D Nếu bạn muốn donate cho mình có thể Donate cho mình tại [đây](https://unghotoi.com/1555302363d10xp) hoặc mail cho mình : nghminh163@outlook.com  
