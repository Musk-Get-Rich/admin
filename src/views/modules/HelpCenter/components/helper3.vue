<template>
  <div class="mx-auto px-20 py-6 space-y-8">
    <template v-if="$i18n.locale === 'en'">
      <div class="space-y-6 text-gray-700 text-lg leading-relaxed">  
        <p class="text-6xl leading-snug !mt-15 mb-0 font-bold">Transfer Instructions</p>  
        <p class="text-6xl leading-snug">  
          Members registered through your exclusive promotional link, but not displayed under your agency line, can apply to transfer these members to your agency line.  
        </p>  

        <p class="text-6xl leading-snug !mt-15 mb-0 font-bold">How to Transfer</p>  
        <p class="text-6xl leading-snug">  
          Log in to the agent backend - Management Center - Member Transfer Application.  
          <br />  
          Upload proof that the member was referred by you, and fill out the member account, your referral link, registration endpoint type, and remarks to submit the application.  
        </p>  

        <p class="text-6xl leading-snug !mt-15 mb-0 font-bold">Common Questions About Transfer</p>  
        <div>  
          <p class="text-6xl leading-snug !mt-5 mb-15">  
            <strong>a. Why are members registered through my referral link under a different agent line?</strong>  
            <br />  
            The member may have registered earlier; you can consult customer service to check the member's registration time.  
          </p>  

          <p class="text-6xl leading-snug !mt-5 mb-15">  
            <strong>b. Where can I check the transfer records?</strong>  
            <br />  
            The transfer page displays the historical records of your account; click to view details to see all transfer records.  
          </p>  

          <p class="text-6xl leading-snug !mt-5 mb-15">  
            <strong>c. Why was my application not approved?</strong>  
            <br />  
            The screenshot you uploaded may not sufficiently prove that the member was referred by you; it is recommended to upload images that include the time, promotional URL, member account, etc., to facilitate quick approval by the administrator.  
          </p>  

          <p class="text-6xl leading-snug !mt-5 mb-15">  
            <strong>d. Did the member recharge during the waiting period for approval?</strong>  
            <br />  
            During the approval waiting period, members can recharge, and their betting will not be affected. After a successful transfer, all recharge and betting records during the waiting period will be displayed in your report.  
          </p>  
        </div>  
      </div>
    </template>
    <template v-else-if="$i18n.locale === 'zh-CN'">
      <div class="space-y-6 text-gray-700 text-lg leading-relaxed">
        <p class="text-6xl leading-snug !mt-15 mb-0 font-bold">转线说明</p>
        <p class="text-6xl leading-snug">
          通过推推广专属链接注册的会员，但未显示在代理线路下时，可以通过转线，申请将会员转线到您的代理线下。
        </p>

        <p class="text-6xl leading-snug !mt-15 mb-0 font-bold">如何转线</p>
        <p class="text-6xl leading-snug">
          登录代理后台 - 管理中心 - 会员转线申请。
          <br />
          上传证明该会员是由您推广而来的截图，并填写会员账号、您的引导链接、注册终端类型，以及备注即可进行申请。
        </p>

        <p class="text-6xl leading-snug !mt-15 mb-0 font-bold">转线常见问题</p>
        <div>
          <p class="text-6xl leading-snug !mt-5 mb-15">
            <strong>a. 为什么通过我推广链接注册的会员却在别的代理线下？</strong>
            <br />
            会员可能在更早时间就注册了，可以咨询客服查询会员注册时间？
          </p>

          <p class="text-6xl leading-snug !mt-5 mb-15">
            <strong>b. 在哪里查看转线记录？</strong>
            <br />
            转线页面显示您的账户历史记录，点击查看详情可以查看所有的转线记录。
          </p>

          <p class="text-6xl leading-snug !mt-5 mb-15">
            <strong>c. 为什么我的审核不通过？</strong>
            <br />
            可能您所上传的截图可能证明该会员是由您开发的，建议您上传的图片时间、推广网址、会员账号等信息，以便管理员快速审核。
          </p>

          <p class="text-6xl leading-snug !mt-5 mb-15">
            <strong>d. 等待审核期间会员充值了么？</strong>
            <br />
            等待审核期间会员会充倘，投注不受任何影响，转线成功后会在审核期间的充值、投注记录都会显示在您的报表内。
          </p>
        </div>
      </div>
    </template>
    <template v-else-if="$i18n.locale === 'zh-TW'">
      <div class="space-y-6 text-gray-700 text-lg leading-relaxed">  
        <p class="text-6xl leading-snug !mt-15 mb-0 font-bold">轉線說明</p>  
        <p class="text-6xl leading-snug">  
          通過推廣專屬鏈接註冊的會員，但未顯示在代理線路下時，可以通過轉線，申請將會員轉線到您的代理線下。  
        </p>  

        <p class="text-6xl leading-snug !mt-15 mb-0 font-bold">如何轉線</p>  
        <p class="text-6xl leading-snug">  
          登錄代理後台 - 管理中心 - 會員轉線申請。  
          <br />  
          上傳證明該會員是由您推廣而來的截圖，並填寫會員帳號、您的引導鏈接、註冊終端類型，以及備註即可進行申請。  
        </p>  

        <p class="text-6xl leading-snug !mt-15 mb-0 font-bold">轉線常見問題</p>  
        <div>  
          <p class="text-6xl leading-snug !mt-5 mb-15">  
            <strong>a. 為什麼通過我推廣鏈接註冊的會員卻在別的代理線下？</strong>  
            <br />  
            會員可能在更早時間就註冊了，可以諮詢客服查詢會員註冊時間？  
          </p>  

          <p class="text-6xl leading-snug !mt-5 mb-15">  
            <strong>b. 在哪裡查看轉線記錄？</strong>  
            <br />  
            轉線頁面顯示您的帳戶歷史記錄，點擊查看詳情可以查看所有的轉線記錄。  
          </p>  

          <p class="text-6xl leading-snug !mt-5 mb-15">  
            <strong>c. 為什麼我的審核不通過？</strong>  
            <br />  
            可能您所上傳的截圖可能證明該會員是由您開發的，建議您上傳的圖片時間、推廣網址、會員帳號等信息，以便管理員快速審核。  
          </p>  

          <p class="text-6xl leading-snug !mt-5 mb-15">  
            <strong>d. 等待審核期間會員充值了嗎？</strong>  
            <br />  
            等待審核期間會員會充值，投注不受任何影響，轉線成功後會在審核期間的充值、投注記錄都會顯示在您的報表內。  
          </p>  
        </div>  
      </div>
    </template>
  </div>
</template>
