<template>
  <div class="mx-auto px-20 py-6 space-y-8">
    <template v-if="$i18n.locale === 'en'">
      <!-- Title and Basic Explanation -->
      <div>
        <h1 class="font-semibold text-gray-800 mb-4 text-7xl">Promotion URL Explanation</h1>
        <div class="space-y-4">
          <p class="text-gray-500 text-6xl leading-snug">
            1. All sites share the same link; members only need to choose the corresponding site for registration.
          </p>
          <p class="text-gray-500 text-6xl leading-snug">
            2. The promotional link can be used to access or download PP88 products.
          </p>
          <p class="text-gray-500 text-6xl leading-snug">
            3. Users who register through the promotional link will become subordinate members of the corresponding
            agent.
          </p>
        </div>
      </div>

      <!-- Overview Section -->
      <div>
        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">Overview</h2>

        <div class="space-y-6">
          <div>
            <h3 class="text-gray-700 font-medium mb-2 text-6xl">H5: Mobile Web Version</h3>
            <p class="text-gray-500 text-6xl leading-snug">
              Copy the link and access it through a mobile browser. It allows normal login, and users registered will be
              under the corresponding agent.
            </p>
          </div>

          <div>
            <h3 class="text-gray-700 font-medium mb-2 text-6xl">PC: Computer Web Version</h3>
            <p class="text-gray-500 text-6xl leading-snug">
              Copy the link and access it using a computer browser. It allows normal login, and users registered will be
              under the corresponding agent.
            </p>
          </div>

          <div>
            <h3 class="text-gray-700 font-medium mb-2 text-6xl">APP: Mobile App</h3>
            <p class="text-gray-500 text-6xl leading-snug">
              Copy the link and access it through a mobile browser for download. It can be used for normal login, and
              users registered will be under the corresponding agent.
            </p>
          </div>
        </div>
      </div>

      <!-- Common Questions Section -->
      <div>
        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">Promotion URL Common Questions</h2>

        <div class="space-y-6">
          <div>
            <p class="text-gray-700 font-medium text-6xl">1. Why are members not registering under my subordinates?</p>
            <p class="text-gray-500 text-6xl mt-2">There could be several reasons for members not registering under your
              subordinates:</p>
            <div class="ml-8 mt-2 space-y-2">
              <p class="text-gray-500 text-6xl">A. The member removed the dealer number from the URL.</p>
              <p class="text-gray-500 text-6xl">B. The link was opened in a third-party app and then redirected to the
                default browser, causing the registration to be untracked.</p>
              <p class="text-gray-500 text-6xl">C. Due to certain device models, switching apps during registration and
                returning to the registration browser can cause an automatic refresh, and registering after the refresh
                can lead to untracked registration.</p>
              <p class="text-gray-500 text-6xl">D. The member has already registered (you can contact customer service
                to inquire about the member's registration time).</p>
            </div>
            <p class="text-gray-500 text-6xl mt-2">
              For the issues above, except D, situations A, B, and C leading to untracked registration can be resolved
              by submitting chat screenshots (with link, date, time) through the agent backend to request a transfer.
            </p>
          </div>

          <div>
            <p class="text-gray-700 font-medium text-6xl">2. What is a short link?</p>
            <p class="text-gray-500 text-6xl mt-2">
              Short links are used for special communication software. Some communication or social software may block
              websites, so short links can be used to avoid blocking. They also allow for visit tracking, so you can
              monitor the use of the short link. Note: Changing the short link will reset the tracking data.
            </p>
          </div>

          <div>
            <p class="text-gray-700 font-medium text-6xl">3. How to apply for a dedicated URL?</p>
            <p class="text-gray-500 text-6xl mt-2">
              Dedicated URLs will be opened for domain applications periodically, and applications will be processed
              within 1-5 working days.
            </p>
          </div>

          <div>
            <p class="text-gray-700 font-medium text-6xl">4. What is the difference between a dedicated URL and a
              regular registration URL?</p>
            <p class="text-gray-500 text-6xl mt-2">
              Regular URLs need to carry the dealer number to register under the agent. We have optimized regular URLs
              so that even if a member opens them through communication software and then jumps to the default browser,
              the dealer number can still be carried. This is a challenge that other platforms cannot overcome! A
              dedicated URL can register under the agent without carrying the dealer number.
            </p>
          </div>

          <div>
            <p class="text-gray-700 font-medium text-6xl">5. Things to note for dedicated domains:</p>
            <div class="ml-8 mt-2 space-y-2">
              <p class="text-gray-500 text-6xl">A. Applications are approved in chronological order. If your requested
                domain name is rejected, it means someone else has already applied for it.</p>
              <p class="text-gray-500 text-6xl">B. If there are no member registrations for a long time, the dedicated
                URL will be revoked.</p>
              <p class="text-gray-500 text-6xl">C. Customizing a dedicated URL is not possible; please apply for your
                desired dedicated URL on the application page</p>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-else-if="$i18n.locale === 'zh-CN'">
      <!-- 简体中文版本 -->
      <div>
        <h1 class="font-semibold text-gray-800 mb-4 text-7xl">推广链接说明</h1>
        <div class="space-y-4">
          <p class="text-gray-500 text-6xl leading-snug">
            1. 所有站点共享同一个链接，会员只需选择对应站点进行注册。
          </p>
          <p class="text-gray-500 text-6xl leading-snug">
            2. 推广链接可用于访问或下载PP88产品。
          </p>
          <p class="text-gray-500 text-6xl leading-snug">
            3. 通过推广链接注册的用户将成为对应代理的下级会员。
          </p>
        </div>
      </div>

      <!-- 概述部分 -->
      <div>
        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">概述</h2>

        <div class="space-y-6">
          <div>
            <h3 class="text-gray-700 font-medium mb-2 text-6xl">H5：移动网页版</h3>
            <p class="text-gray-500 text-6xl leading-snug">
              复制链接并通过移动浏览器访问。允许正常登录，注册的用户将归属于对应代理。
            </p>
          </div>

          <div>
            <h3 class="text-gray-700 font-medium mb-2 text-6xl">PC：电脑网页版</h3>
            <p class="text-gray-500 text-6xl leading-snug">
              复制链接并使用电脑浏览器访问。允许正常登录，注册的用户将归属于对应代理。
            </p>
          </div>

          <div>
            <h3 class="text-gray-700 font-medium mb-2 text-6xl">APP：移动应用</h3>
            <p class="text-gray-500 text-6xl leading-snug">
              复制链接并通过移动浏览器下载。可用于正常登录，注册的用户将归属于对应代理。
            </p>
          </div>
        </div>
      </div>

      <!-- 常见问题部分 -->
      <div>
        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">推广链接常见问题</h2>

        <div class="space-y-6">
          <div>
            <p class="text-gray-700 font-medium text-6xl">1. 为什么会员不在我的下级注册？</p>
            <p class="text-gray-500 text-6xl mt-2">会员未在您的下级注册可能有以下几个原因：</p>
            <div class="ml-8 mt-2 space-y-2">
              <p class="text-gray-500 text-6xl">A. 会员从URL中删除了代理号。</p>
              <p class="text-gray-500 text-6xl">B. 链接在第三方应用中打开后重定向到默认浏览器，导致注册未被追踪。</p>
              <p class="text-gray-500 text-6xl">C. 由于某些设备型号，在注册期间切换应用并返回注册浏览器可能导致自动刷新，刷新后注册将无法追踪。</p>
              <p class="text-gray-500 text-6xl">D. 会员已经注册（您可以联系客服查询会员的注册时间）。</p>
            </div>
            <p class="text-gray-500 text-6xl mt-2">
              对于上述问题，除了D之外，情况A、B和C导致的未追踪注册可以通过在代理后台提交聊天截图（包含链接、日期、时间）来申请转移。
            </p>
          </div>

          <div>
            <p class="text-gray-700 font-medium text-6xl">2. 什么是短链接？</p>
            <p class="text-gray-500 text-6xl mt-2">
              短链接用于特殊通讯软件。某些通讯或社交软件可能会屏蔽网站，因此可以使用短链接来避免被屏蔽。它们还允许访问追踪，以便您可以监控短链接的使用情况。注意：更改短链接将重置追踪数据。
            </p>
          </div>

          <div>
            <p class="text-gray-700 font-medium text-6xl">3. 如何申请专属URL？</p>
            <p class="text-gray-500 text-6xl mt-2">
              专属URL将定期开放域名申请，申请将在1-5个工作日内处理。
            </p>
          </div>

          <div>
            <p class="text-gray-700 font-medium text-6xl">4. 专属URL和常规注册URL有什么区别？</p>
            <p class="text-gray-500 text-6xl mt-2">
              常规URL需要携带代理号才能在代理下注册。我们已优化常规URL，即使会员通过通讯软件打开后跳转到默认浏览器，代理号仍然可以携带。这是其他平台无法克服的挑战！专属URL可以在不携带代理号的情况下在代理下注册。
            </p>
          </div>

          <div>
            <p class="text-gray-700 font-medium text-6xl">5. 专属域名需要注意的事项：</p>
            <div class="ml-8 mt-2 space-y-2">
              <p class="text-gray-500 text-6xl">A. 按申请顺序批准。如果您申请的域名被拒绝，意味着已有人申请。</p>
              <p class="text-gray-500 text-6xl">B. 长时间没有会员注册，专属URL将被撤销。</p>
              <p class="text-gray-500 text-6xl">C. 不可自定义专属URL；请在申请页面申请您想要的专属URL。</p>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template v-else-if="$i18n.locale === 'zh-TW'">
      <!-- 繁体中文版本 -->
      <div>
        <h1 class="font-semibold text-gray-800 mb-4 text-7xl">推廣鏈接說明</h1>
        <div class="space-y-4">
          <p class="text-gray-500 text-6xl leading-snug">
            1. 所有站點共享同一個鏈接，會員只需選擇對應站點進行註冊。
          </p>
          <p class="text-gray-500 text-6xl leading-snug">
            2. 推廣鏈接可用於訪問或下載PP88產品。
          </p>
          <p class="text-gray-500 text-6xl leading-snug">
            3. 通過推廣鏈接註冊的用戶將成為對應代理的下級會員。
          </p>
        </div>
      </div>

      <!-- 概述部分 -->
      <div>
        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">概述</h2>

        <div class="space-y-6">
          <div>
            <h3 class="text-gray-700 font-medium mb-2 text-6xl">H5：移動網頁版</h3>
            <p class="text-gray-500 text-6xl leading-snug">
              複製鏈接並通過移動瀏覽器訪問。允許正常登錄，註冊的用戶將歸屬於對應代理。
            </p>
          </div>

          <div>
            <h3 class="text-gray-700 font-medium mb-2 text-6xl">PC：電腦網頁版</h3>
            <p class="text-gray-500 text-6xl leading-snug">
              複製鏈接並使用電腦瀏覽器訪問。允許正常登錄，註冊的用戶將歸屬於對應代理。
            </p>
          </div>

          <div>
            <h3 class="text-gray-700 font-medium mb-2 text-6xl">APP：移動應用</h3>
            <p class="text-gray-500 text-6xl leading-snug">
              複製鏈接並通過移動瀏覽器下載。可用於正常登錄，註冊的用戶將歸屬於對應代理。
            </p>
          </div>
        </div>
      </div>

      <!-- 常見問題部分 -->
      <div>
        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">推廣鏈接常見問題</h2>

        <div class="space-y-6">
          <div>
            <p class="text-gray-700 font-medium text-6xl">1. 為什麼會員不在我的下級註冊？</p>
            <p class="text-gray-500 text-6xl mt-2">會員未在您的下級註冊可能有以下幾個原因：</p>
            <div class="ml-8 mt-2 space-y-2">
              <p class="text-gray-500 text-6xl">A. 會員從URL中刪除了代理號。</p>
              <p class="text-gray-500 text-6xl">B. 鏈接在第三方應用中打開後重定向到預設瀏覽器，導致註冊未被追蹤。</p>
              <p class="text-gray-500 text-6xl">C. 由於某些設備型號，在註冊期間切換應用並返回註冊瀏覽器可能導致自動刷新，刷新後註冊將無法追蹤。</p>
              <p class="text-gray-500 text-6xl">D. 會員已經註冊（您可以聯繫客服查詢會員的註冊時間）。</p>
            </div>
            <p class="text-gray-500 text-6xl mt-2">
              對於上述問題，除了D之外，情況A、B和C導致的未追蹤註冊可以通過在代理後台提交聊天截圖（包含鏈接、日期、時間）來申請轉移。
            </p>
          </div>

          <div>
            <p class="text-gray-700 font-medium text-6xl">2. 什麼是短鏈接？</p>
            <p class="text-gray-500 text-6xl mt-2">
              短鏈接用於特殊通訊軟體。某些通訊或社交軟體可能會屏蔽網站，因此可以使用短鏈接來避免被屏蔽。它們還允許訪問追蹤，以便您可以監控短鏈接的使用情況。注意：更改短鏈接將重置追蹤數據。
            </p>
          </div>

          <div>
            <p class="text-gray-700 font-medium text-6xl">3. 如何申請專屬URL？</p>
            <p class="text-gray-500 text-6xl mt-2">
              專屬URL將定期開放域名申請，申請將在1-5個工作日內處理。
            </p>
          </div>

          <div>
            <p class="text-gray-700 font-medium text-6xl">4. 專屬URL和常規註冊URL有什麼區別？</p>
            <p class="text-gray-500 text-6xl mt-2">
              常規URL需要攜帶代理號才能在代理下註冊。我們已優化常規URL，即使會員通過通訊軟體打開後跳轉到預設瀏覽器，代理號仍然可以攜帶。這是其他平台無法克服的挑戰！專屬URL可以在不攜帶代理號的情況下在代理下註冊。
            </p>
          </div>

          <div>
            <p class="text-gray-700 font-medium text-6xl">5. 專屬域名需要注意的事項：</p>
            <div class="ml-8 mt-2 space-y-2">
              <p class="text-gray-500 text-6xl">A. 按申請順序批准。如果您申請的域名被拒絕，意味著已有人申請。</p>
              <p class="text-gray-500 text-6xl">B. 長時間沒有會員註冊，專屬URL將被撤銷。</p>
              <p class="text-gray-500 text-6xl">C. 不可自定義專屬URL；請在申請頁面申請您想要的專屬URL。</p>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
