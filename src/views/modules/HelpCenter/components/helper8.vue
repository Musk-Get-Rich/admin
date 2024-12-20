<template>
  <div class="mx-auto px-20 py-6 space-y-8">
    <template v-if="$i18n.locale === 'en'">
      <!-- 英文版本保持不变 -->
      <!-- Title and Introduction -->
      <div>
        <h1 class="font-semibold text-gray-800 mb-2 text-7xl">Transfer Line Explanation</h1>
        <p class="text-gray-500 text-6xl leading-snug">
          Members who registered through the promotional link but are not shown under your agent line can apply for a
          transfer to move the member under your agent line.
        </p>
      </div>

      <!-- How to Transfer Section -->
      <div>
        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">How to Transfer</h2>
        <p class="text-gray-500 text-6xl leading-snug">
          Log in to the agent backend – Management Center – Member Transfer Line Application.
        </p>
        <p class="text-gray-500 text-6xl leading-snug mt-2">
          Upload screenshots that prove the member was recruited through your promotion, and fill in the member's
          account, your referral link, the registration terminal type, and remarks to apply.
        </p>
      </div>

      <!-- Common Questions Section -->
      <div>
        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">Common Questions About Transfer Lines</h2>

        <div class="space-y-6">
          <div>
            <p class="text-gray-700 font-medium text-6xl">1. Why are members who registered through my promotional link
              under another agent's line?</p>
            <p class="text-gray-500 text-6xl mt-2">
              The member might have registered earlier; you can consult customer service to check the member's
              registration time. Or the member might have consulted other agents and used another agent's link to
              register.
            </p>
          </div>

          <div>
            <p class="text-gray-700 font-medium text-6xl">2. Where can I view my transfer line records?</p>
            <p class="text-gray-500 text-6xl mt-2">
              The transfer line page displays your current month and historical cumulative transfer data. Click "View
              Details" to see all transfer line records.
            </p>
          </div>

          <div>
            <p class="text-gray-700 font-medium text-6xl">3. Why was my application not approved?</p>
            <p class="text-gray-500 text-6xl mt-2">
              The screenshots you uploaded may not prove that the member was recruited by you. We suggest you upload
              images with time, promotional URL, member account, etc., for quick review by the administrator.
            </p>
          </div>

          <div>
            <p class="text-gray-700 font-medium text-6xl">4. What if the member makes a deposit during the waiting
              period for review?</p>
            <p class="text-gray-500 text-6xl mt-2">
              During the waiting period for review, the member's deposits and bets are not affected. After the transfer
              is successful, all records of the member's deposits and bets during the review period will be displayed in
              your report.
            </p>
          </div>
        </div>
      </div>
    </template>

    <template v-else-if="$i18n.locale === 'zh-CN'">
      <!-- 简体中文版本 -->
      <div>
        <h1 class="font-semibold text-gray-800 mb-2 text-7xl">转线说明</h1>
        <p class="text-gray-500 text-6xl leading-snug">
          通过推广链接注册但未显示在您代理线下的会员，可以申请转线至您的代理线。
        </p>
      </div>

      <!-- 如何转线部分 -->
      <div>
        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">如何转线</h2>
        <p class="text-gray-500 text-6xl leading-snug">
          登录代理后台 - 管理中心 - 会员转线申请。
        </p>
        <p class="text-gray-500 text-6xl leading-snug mt-2">
          上传能证明会员通过您推广的截图，并填写会员账号、您的推荐链接、注册终端类型和备注以进行申请。
        </p>
      </div>

      <!-- 常见问题部分 -->
      <div>
        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">转线常见问题</h2>

        <div class="space-y-6">
          <div>
            <p class="text-gray-700 font-medium text-6xl">1. 为什么通过我的推广链接注册的会员在其他代理线下？</p>
            <p class="text-gray-500 text-6xl mt-2">
              会员可能之前已经注册，您可以咨询客服查询会员的注册时间。或者会员可能咨询了其他代理并使用了其他代理的链接注册。
            </p>
          </div>

          <div>
            <p class="text-gray-700 font-medium text-6xl">2. 我在哪里可以查看我的转线记录？</p>
            <p class="text-gray-500 text-6xl mt-2">
              转线页面显示您当前月份和历史累计转线数据。点击"查看详情"可以查看所有转线记录。
            </p>
          </div>

          <div>
            <p class="text-gray-700 font-medium text-6xl">3. 为什么我的申请没有获得批准？</p>
            <p class="text-gray-500 text-6xl mt-2">
              您上传的截图可能无法证明会员是由您招募的。我们建议您上传包含时间、推广URL、会员账号等信息的图片，以便管理员快速审核。
            </p>
          </div>

          <div>
            <p class="text-gray-700 font-medium text-6xl">4. 在审核等待期间会员充值怎么办？</p>
            <p class="text-gray-500 text-6xl mt-2">
              在审核等待期间，会员的充值和投注不受影响。转线成功后，审核期间会员的所有充值和投注记录将显示在您的报表中。
            </p>
          </div>
        </div>
      </div>
    </template>

    <template v-else-if="$i18n.locale === 'zh-TW'">
      <!-- 繁体中文版本 -->
      <div>
        <h1 class="font-semibold text-gray-800 mb-2 text-7xl">轉線說明</h1>
        <p class="text-gray-500 text-6xl leading-snug">
          通過推廣鏈接註冊但未顯示在您代理線下的會員，可以申請轉線至您的代理線。
        </p>
      </div>

      <!-- 如何转线部分 -->
      <div>
        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">如何轉線</h2>
        <p class="text-gray-500 text-6xl leading-snug">
          登錄代理後台 - 管理中心 - 會員轉線申請。
        </p>
        <p class="text-gray-500 text-6xl leading-snug mt-2">
          上傳能證明會員通過您推廣的截圖，並填寫會員帳號、您的推薦鏈接、註冊終端類型和備註以進行申請。
        </p>
      </div>

      <!-- 常见问题部分 -->
      <div>
        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">轉線常見問題</h2>

        <div class="space-y-6">
          <div>
            <p class="text-gray-700 font-medium text-6xl">1. 為什麼通過我的推廣鏈接註冊的會員在其他代理線下？</p>
            <p class="text-gray-500 text-6xl mt-2">
              會員可能之前已經註冊，您可以諮詢客服查詢會員的註冊時間。或者會員可能諮詢了其他代理並使用了其他代理的鏈接註冊。
            </p>
          </div>

          <div>
            <p class="text-gray-700 font-medium text-6xl">2. 我在哪裡可以查看我的轉線記錄？</p>
            <p class="text-gray-500 text-6xl mt-2">
              轉線頁面顯示您當前月份和歷史累計轉線數據。點擊"查看詳情"可以查看所有轉線記錄。
            </p>
          </div>

          <div>
            <p class="text-gray-700 font-medium text-6xl">3. 為什麼我的申請沒有獲得批准？</p>
            <p class="text-gray-500 text-6xl mt-2">
              您上傳的截圖可能無法證明會員是由您招募的。我們建議您上傳包含時間、推廣URL、會員帳號等資訊的圖片，以便管理員快速審核。
            </p>
          </div>

          <div>
            <p class="text-gray-700 font-medium text-6xl">4. 在審核等待期間會員充值怎麼辦？</p>
            <p class="text-gray-500 text-6xl mt-2">
              在審核等待期間，會員的充值和投注不受影響。轉線成功後，審核期間會員的所有充值和投注記錄將顯示在您的報表中。
            </p>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>