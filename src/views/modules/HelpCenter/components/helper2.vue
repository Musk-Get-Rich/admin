<template>
  <div class="mx-auto px-20 py-6 space-y-8">
    <template v-if="$i18n.locale === 'en'">
      <h1 class="font-semibold mb-2 text-7xl">Promotion URL Instructions</h1>

      <div class="space-y-6 text-gray-700 text-lg leading-relaxed">
        <p class="text-6xl leading-snug m-0 mt-10">1. All websites share a single link, and members can only select the
          corresponding website for registration.</p>
        <p class="text-6xl leading-snug">2. The shared link is only for accessing 盛乐体育 products.</p>
        <p class="text-6xl leading-snug">3. Users who register through the shared link will become the corresponding
          subordinate members.</p>

        <p class="text-6xl leading-snug mb-5 !mt-15">Overview</p>
        <p class="text-6xl leading-snug">H5: Mobile Web Version<br>
          Copy the link and access it via a mobile browser. Users can log in normally, and registered users will belong
          to the corresponding agent.
        </p>
        <p class="text-6xl leading-snug">PC: Desktop Web Version<br>
          Copy the link and access it via a desktop browser. Users can log in normally, and registered users will belong
          to the corresponding agent.
        </p>

        <p class="text-6xl leading-snug mb-5 !mt-15">Common Issues with Promotion URLs</p>
        <p class="text-6xl leading-snug">1. Why hasn't my subordinate registered as a member?<br>
          Members may not have registered on your subordinate URL for the following reasons:
        </p>
        <ul class="text-6xl leading-snug list-none pl-8">
          <li>A. The member has removed the dealership code from the URL.</li>
          <li>B. The link was opened in a third-party application and returned without confirming the browser, resulting
            in the registration not being tracked.</li>
          <li>C. During registration on certain devices, the registration process may cause the browser to refresh
            automatically, leading to the inability to track the registration.</li>
          <li>D. The member has already registered (you can contact customer service to check the registration time of
            the member).</li>
        </ul>

        <p class="text-6xl leading-snug mt-5">
          Regarding the above issues, except for D, which doesn’t lead to registration tracking, cases A, B, and C can
          all be resolved by submitting chat screenshots (including links, dates, times) through the agent backend.
        </p>
      </div>
    </template>

    <template v-else-if="$i18n.locale === 'zh-CN'">
      <h1 class="font-semibold mb-2 text-7xl">推广网址说明</h1>

      <div class="space-y-6 text-gray-700 text-lg leading-relaxed">
        <p class="text-6xl leading-snug m-0 mt-10">1. 所有网站共享一个链接，会员只能选择对应网站进行注册即可。</p>
        <p class="text-6xl leading-snug">2. 分享的链接仅用于访问盛乐体育产品。</p>
        <p class="text-6xl leading-snug">3. 通过分享的链接注册的用户将成为相应的下属会员。</p>

        <p class="text-6xl leading-snug mb-5 !mt-15">概述</p>
        <p class="text-6xl leading-snug">H5: 手机网页版<br>
          复制链接，通过手机浏览器访问，可以正常登录，注册的用户属于相应代理。
        </p>
        <p class="text-6xl leading-snug">PC: 电脑网页版<br>
          复制链接，用电脑浏览器访问，可以正常登录，注册的用户会归属到相应的代理下。
        </p>

        <p class="text-6xl leading-snug mb-5 !mt-15">推广网址常见问题</p>
        <p class="text-6xl leading-snug">1. 为什么我的下属没有成为会员注册？<br>
          成员没有在您的下属网址注册可能有以下几种原因：
        </p>
        <ul class="text-6xl leading-snug list-none pl-8">
          <li>A. 会员未通过 URL 删除掉经销编码。</li>
          <li>B. 该链接在第三方应用程序中打开，然后返回时未确认浏览器，导致注册未被追踪。</li>
          <li>C. 由于某些设备型号，注册过程中切换应用并返回注册浏览器会导致自动刷新，刷新后再注册会导致无法追踪注册。</li>
          <li>D.该会员已经注册过（可以联系客服查询该会员的注册时间）。</li>
        </ul>

        <p class="text-6xl leading-snug mt-5">
          针对以上问题，除D之外，导致注册无法追踪的A、B、C情况，都可以通过代理后台提交聊天截图（包含链接、日期、时间）申请转移解决。
        </p>
      </div>
    </template>

    <template v-else-if="$i18n.locale === 'zh-TW'">
      <h1 class="font-semibold mb-2 text-7xl">推廣網址說明</h1>
      <div class="space-y-6 text-gray-700 text-lg leading-relaxed">
        <p class="text-6xl leading-snug m-0 mt-10">1. 所有網站共享一個鏈接，會員只能選擇對應網站進行註冊即可。</p>
        <p class="text-6xl leading-snug">2. 分享的鏈接僅用於訪問盛乐体育產品。</p>
        <p class="text-6xl leading-snug">3. 通過分享的鏈接註冊的用戶將成為相應的下屬會員。</p>

        <p class="text-6xl leading-snug mb-5 !mt-15">概述</p>
        <p class="text-6xl leading-snug">H5: 手機網頁版<br>
          複製鏈接，通過手機瀏覽器訪問，可以正常登錄，註冊的用戶屬於相應代理。
        </p>
        <p class="text-6xl leading-snug">PC: 電腦網頁版<br>
          複製鏈接，用電腦瀏覽器訪問，可以正常登錄，註冊的用戶會歸屬到相應的代理下。
        </p>

        <p class="text-6xl leading-snug mb-5 !mt-15">推廣網址常見問題</p>
        <p class="text-6xl leading-snug">1. 為什麼我的下屬沒有成為會員註冊？<br>
          成員沒有在您的下屬網址註冊可能有以下幾種原因：
        </p>
        <ul class="text-6xl leading-snug list-none pl-8">
          <li>A. 會員未通過 URL 刪除掉經銷編碼。</li>
          <li>B. 該鏈接在第三方應用程序中打開，然後返回時未確認瀏覽器，導致註冊未被追蹤。</li>
          <li>C. 中某些設備註冊時，註冊過程可能會導致註冊瀏覽器會導致自動刷新，刷新後註冊會導致無法追蹤註冊。</li>
          <li>D. 該會員已經註冊過（可以聯繫客服查詢該會員的註冊時間）。</li>
        </ul>

        <p class="text-6xl leading-snug mt-5">
          對於以上問題，除D之外，導致註冊無法追蹤的A、B、C情況，都可以通過代理後台提交聊天截圖（包含鏈接、日期、時間）申請轉移解決。
        </p>
      </div>
    </template>
  </div>
</template>
