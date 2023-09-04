# 透過React Create React App 建立 Alpha Twitter專案

為了讓Alpha Camp 的使用者有一個專業的社群平台交流，於是建立此專案

## 專案畫面
* LoginPage
![image](https://github.com/kotjy/ac-twitter/assets/132338192/e0686875-c54b-45a3-8378-d179ea641389)


* MainPage
![image](https://github.com/kotjy/ac-twitter/assets/132338192/acc99a13-f33c-444a-8647-b8b19ef4b7c8)

  * MainPage 上傳貼文
  ![image](https://github.com/kotjy/ac-twitter/assets/132338192/eca55969-2f03-42f6-af75-631454da7c75)

  * MainPage 個人資料
![image](https://github.com/kotjy/ac-twitter/assets/132338192/7dc58b99-be23-4f84-a14c-43d5d641c4a9)


## 專案功能

### 註冊/登入頁面

* 可以讓新使用者註冊新的帳號，並登入主頁

* 後台只有管理帳號可以登入

* 註冊/編輯時，account 和 email 不能與其他人重複，若有重複會跳出錯誤提示

### 首頁

* 可以點擊輸入框或推文按鈕新增推文

* 所有 Tweets 依 create 日期排序，最新的在前

* 可以針對特定推文進行回覆

* 點擊貼文中使用者頭像時，能瀏覽該使用者的個人資料及推文

* 可以針對右側欄位和使用者進行跟隨


### 個人資料

* 瀏覽使用者個人資訊

* 編輯個人資料，包含名稱，自我介紹，背景圖，大頭照

* 瀏覽使用者相關推文，喜歡的內容

* 可以查看追蹤者，也可以追蹤別人跟取消追蹤

### 設定

* 可以更改使用者帳戶資訊

### 後台

* 可以瀏覽所有貼文，也有刪除貼文的權限

* 查看所有使用者相關資訊


## install

1.打開terminal，Clone 此專案至本機電腦

`git clone https://github.com/kotjy/ac-twitter.git`

2.開啟terminal

`cd ac-twitter`

3.安裝npm套件

`npm install`

4.開啟專案

`npm run start`

5.出現以下內容表示伺服器已啟動

Local:  (http://localhost:3000/)

