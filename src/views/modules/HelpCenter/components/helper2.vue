<template>
  <div class="mx-auto px-20 py-6 space-y-8">
    <template v-if="$i18n.locale === 'en'">
      <!-- Title Section -->
      <div>
        <h1 class="font-semibold text-gray-800 mb-2 text-7xl">Cancellation Instructions</h1>
      </div>

      <!-- Instructions List -->
      <div class="space-y-4">
        <div>
          <p class="text-gray-500 text-6xl my-3xl leading-snug">
            1. Enter the member account to be canceled and the system will identify whether it meets the cancellation
            conditions (a checkmark indicates the conditions are met, an X indicates they are not).
          </p>
        </div>

        <div>
          <p class="text-gray-500 text-6xl my-3xl leading-snug">
            2. Members who meet the cancellation criteria need to provide conversation records with the member,
            including at least two screenshots of the member's bound information (name, last digits of the bound
            bank/cryptocurrency address, email, last digits of mobile number).
          </p>
        </div>

        <div>
          <p class="text-gray-500 text-6xl my-3xl leading-snug">
            3. Once the application is initiated, the application status can be viewed in the cancellation record.
          </p>
        </div>

        <div>
          <p class="text-gray-500 text-6xl my-3xl leading-snug">
            4. After approval by the relevant department, members need to log in to their account, go to the "My" page,
            and click "One-Click Cancellation" below the logout button to complete the account cancellation.
          </p>
        </div>

        <div>
          <p class="text-gray-500 text-6xl my-3xl leading-snug">
            5. Members who have completed the cancellation can re-register and bind the information of the canceled
            account.
          </p>
        </div>

        <!-- Cancellation Conditions Section -->
        <div>
          <p class="text-gray-500 text-6xl my-3xl leading-snug">6. Cancellation conditions:</p>

          <div class="space-y-4">
            <p class="text-gray-500 text-6xl my-3xl leading-snug">
              A. Users who have not made any deposits within one week of registration (including those who received gift
              bonuses but did not deposit) can apply for cancellation.
            </p>

            <p class="text-gray-500 text-6xl my-3xl leading-snug">
              B. Users who have not logged in for 20 days can apply for cancellation.
            </p>

            <p class="text-gray-500 text-6xl my-3xl leading-snug">
              C. Users who have not made any deposits or played any games for 30 days can apply for cancellation.
            </p>

            <p class="text-gray-500 text-6xl my-3xl leading-snug">
              D. Users who have made deposits but have not played any games for 45 days can apply for cancellation.
            </p>
          </div>
        </div>
      </div>
    </template>

    <template v-else-if="$i18n.locale === 'zh-CN'">
      <!-- 标题部分 -->
      <div>
        <h1 class="font-semibold text-gray-800 mb-2 text-7xl">注销说明</h1>
      </div>

      <!-- 说明列表 -->
      <div class="space-y-4">
        <div>
          <p class="text-gray-500 text-6xl my-3xl leading-snug">
            1. 输入要注销的会员账号，系统将识别是否符合注销条件（对勾表示符合条件，叉号表示不符合）。
          </p>
        </div>

        <div>
          <p class="text-gray-500 text-6xl my-3xl leading-snug">
            2. 符合注销条件的会员需提供与会员的对话记录，包括至少两张会员绑定信息的截图（姓名、绑定的银行/加密货币地址末尾数字、邮箱、手机号末尾数字）。
          </p>
        </div>

        <div>
          <p class="text-gray-500 text-6xl my-3xl leading-snug">
            3. 发起申请后，可在注销记录中查看申请状态。
          </p>
        </div>

        <div>
          <p class="text-gray-500 text-6xl my-3xl leading-snug">
            4. 经相关部门批准后，会员需登录账号，进入"我的"页面，点击注销按钮下方的"一键注销"完成账号注销。
          </p>
        </div>

        <div>
          <p class="text-gray-500 text-6xl my-3xl leading-snug">
            5. 完成注销的会员可以重新注册并绑定已注销账号的信息。
          </p>
        </div>

        <!-- 注销条件部分 -->
        <div>
          <p class="text-gray-500 text-6xl my-3xl leading-snug">6. 注销条件：</p>

          <div class="space-y-4">
            <p class="text-gray-500 text-6xl my-3xl leading-snug">
              A. 注册后一周内未进行任何充值的用户（包括已收到礼金但未充值的用户）可申请注销。
            </p>

            <p class="text-gray-500 text-6xl my-3xl leading-snug">
              B. 20天未登录的用户可申请注销。
            </p>

            <p class="text-gray-500 text-6xl my-3xl leading-snug">
              C. 30天未充值或未玩游戏的用户可申请注销。
            </p>

            <p class="text-gray-500 text-6xl my-3xl leading-snug">
              D. 已充值但45天未玩游戏的用户可申请注销。
            </p>
          </div>
        </div>
      </div>
    </template>

    <template v-else-if="$i18n.locale === 'zh-TW'">
      <!-- 標題部分 -->
      <div>
        <h1 class="font-semibold text-gray-800 mb-2 text-7xl">註銷說明</h1>
      </div>

      <!-- 說明列表 -->
      <div class="space-y-4">
        <div>
          <p class="text-gray-500 text-6xl my-3xl leading-snug">
            1. 輸入要註銷的會員賬號，系統將識別是否符合註銷條件（對勾表示符合條件，叉號表示不符合）。
          </p>
        </div>

        <div>
          <p class="text-gray-500 text-6xl my-3xl leading-snug">
            2. 符合註銷條件的會員需提供與會員的對話記錄，包括至少兩張會員綁定資訊的截圖（姓名、綁定的銀行/加密貨幣地址末尾數字、郵箱、手機號末尾數字）。
          </p>
        </div>

        <div>
          <p class="text-gray-500 text-6xl my-3xl leading-snug">
            3. 發起申請後，可在註銷記錄中查看申請狀態。
          </p>
        </div>

        <div>
          <p class="text-gray-500 text-6xl my-3xl leading-snug">
            4. 經相關部門批准後，會員需登錄賬號，進入"我的"頁面，點擊註銷按鈕下方的"一鍵註銷"完成賬號註銷。
          </p>
        </div>

        <div>
          <p class="text-gray-500 text-6xl my-3xl leading-snug">
            5. 完成註銷的會員可以重新註冊並綁定已註銷賬號的資訊。
          </p>
        </div>

        <!-- 註銷條件部分 -->
        <div>
          <p class="text-gray-500 text-6xl my-3xl leading-snug">6. 註銷條件：</p>

          <div class="space-y-4">
            <p class="text-gray-500 text-6xl my-3xl leading-snug">
              A. 註冊後一週內未進行任何充值的用戶（包括已收到禮金但未充值的用戶）可申請註銷。
            </p>

            <p class="text-gray-500 text-6xl my-3xl leading-snug">
              B. 20天未登錄的用戶可申請註銷。
            </p>

            <p class="text-gray-500 text-6xl my-3xl leading-snug">
              C. 30天未充值或未玩遊戲的用戶可申請註銷。
            </p>

            <p class="text-gray-500 text-6xl my-3xl leading-snug">
              D. 已充值但45天未玩遊戲的用戶可申請註銷。
            </p>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>