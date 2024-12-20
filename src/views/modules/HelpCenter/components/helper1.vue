<template>
  <div class="mx-auto px-20 py-6 space-y-8">
    <template v-if="$i18n.locale === 'en'">
      <!-- Title Section -->
      <div>
        <h1 class="font-semibold text-gray-800 mb-2 text-7xl">Agent Proxy Deposit Explanation</h1>
        <p class="text-gray-500 text-6xl my-3xl leading-snug">
          Agents can use their agent balance to make proxy deposits for their subordinate members. The minimum amount
          for a single proxy deposit is 1 MYR, and the maximum is 10,000 MYR.
        </p>
      </div>

      <!-- How to Recharge Section -->
      <div>
        <h2 class="font-semibold text-gray-800 mb-2 text-7xl">How to Recharge</h2>
        <p class="text-gray-500 text-6xl my-3xl leading-snug">
          Proxy Deposit – Choose the corresponding USDT protocol for transfer. Recharges are only accepted in
          TRC20/ERC20, starting from 10U, with no upper limit.
        </p>
      </div>

      <!-- How to Proxy Deposit Section -->
      <div>
        <h2 class="font-semibold text-gray-800 mb-2 text-7xl">How to Proxy Deposit</h2>
        <p class="text-gray-500 mb-2 text-6xl my-3xl leading-snug">Member Management – Operation – Player Proxy Deposit.
        </p>
        <p class="text-gray-500 text-6xl my-3xl leading-snug">
          Please set a payment password before proxy deposit. Steps to set a payment password: Agent Backend – Personal
          Center – Personal Profile – Set Payment Password in Security Information
          <span class="text-red">(can be set through the bound email address; if unable to set the payment password
            yourself, please contact service group customer service)</span>.
        </p>
      </div>

      <!-- Common Transfer Questions Section -->
      <div>
        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">Common Transfer Questions</h2>

        <div class="space-y-4">
          <!-- Question 1 -->
          <div>
            <h3 class="text-gray-500 font-medium mb-1 text-6xl">1. Where can I view my proxy deposit records?</h3>
            <p class="text-gray-500 my-3xl text-6xl leading-snug">Go to Financial Center – Member Proxy Deposit – Proxy
              Deposit Records to view historical proxy deposit records.</p>
          </div>

          <!-- Question 2 -->
          <div>
            <h3 class="text-gray-500 font-medium mb-1 text-6xl">2. What to do if I transfer to the wrong member?</h3>
            <p class="text-gray-500 my-3xl text-6xl leading-snug">Transfers to the wrong member cannot be deducted and
              recovered, please confirm the member account is correct before transferring.</p>
          </div>

          <!-- Question 3 -->
          <div>
            <h3 class="text-gray-500 font-medium mb-1 text-6xl">3. How to check records?</h3>
            <p class="text-gray-500 my-3xl text-6xl leading-snug">For recharge records, please check under "Proxy
              Deposit Recharge," and for proxy deposit records, check under "Player Proxy Deposit."</p>
          </div>

          <!-- Question 4 -->
          <div>
            <h3 class="text-gray-500 font-medium mb-1 text-6xl">4. Why is the recharge address different from the actual
              transfer address?</h3>
            <p class="text-gray-500 my-3xl text-6xl leading-snug">Computer viruses may cause the page address to differ
              from the actual transfer address. Please do not transfer and first contact service group customer service
              to verify if the recharge address is correct.</p>
          </div>
        </div>
      </div>
    </template>
    <template v-else-if="$i18n.locale === 'zh-CN'">
      <!-- 标题部分 -->
      <div>
        <h1 class="font-semibold text-gray-800 mb-2 text-7xl">代理商代充值说明</h1>
        <p class="text-gray-500 text-6xl my-3xl leading-snug">
          代理商可以使用其代理余额为下级会员进行代充值。单次代充值的最低金额为1马来西亚令吉（MYR），最高金额为10,000马来西亚令吉（MYR）。
        </p>
      </div>

      <!-- 充值方式部分 -->
      <div>
        <h2 class="font-semibold text-gray-800 mb-2 text-7xl">充值方式</h2>
        <p class="text-gray-500 text-6xl my-3xl leading-snug">
          代充值 - 选择对应的USDT协议进行转账。充值仅接受TRC20/ERC20协议，起始金额为10U，无上限。
        </p>
      </div>

      <!-- 如何代充值部分 -->
      <div>
        <h2 class="font-semibold text-gray-800 mb-2 text-7xl">如何进行代充值</h2>
        <p class="text-gray-500 mb-2 text-6xl my-3xl leading-snug">会员管理 - 操作 - 玩家代充值。</p>
        <p class="text-gray-500 text-6xl my-3xl leading-snug">
          请在进行代充值前设置支付密码。设置支付密码的步骤：代理商后台 - 个人中心 - 个人资料 - 在安全信息中设置支付密码
          <span class="text-red">（可通过绑定的邮箱地址设置；如无法自行设置支付密码，请联系客服）</span>。
        </p>
      </div>

      <!-- 常见转账问题部分 -->
      <div>
        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">常见转账问题</h2>

        <div class="space-y-4">
          <!-- 问题1 -->
          <div>
            <h3 class="text-gray-500 font-medium mb-1 text-6xl">1. 我在哪里可以查看代充值记录？</h3>
            <p class="text-gray-500 my-3xl text-6xl leading-snug">进入财务中心 - 会员代充值 - 代充值记录，可查看历史代充值记录。</p>
          </div>

          <!-- 问题2 -->
          <div>
            <h3 class="text-gray-500 font-medium mb-1 text-6xl">2. 如果转错会员怎么办？</h3>
            <p class="text-gray-500 my-3xl text-6xl leading-snug">转账给错误的会员无法扣除和恢复，请在转账前确认会员账号正确。</p>
          </div>

          <!-- 问题3 -->
          <div>
            <h3 class="text-gray-500 font-medium mb-1 text-6xl">3. 如何查看记录？</h3>
            <p class="text-gray-500 my-3xl text-6xl leading-snug">充值记录请在"代充值充值"下查看，代充值记录请在"玩家代充值"下查看。</p>
          </div>

          <!-- 问题4 -->
          <div>
            <h3 class="text-gray-500 font-medium mb-1 text-6xl">4. 为什么充值地址与实际转账地址不同？</h3>
            <p class="text-gray-500 my-3xl text-6xl leading-snug">电脑病毒可能导致页面地址与实际转账地址不同。请勿转账，并首先联系客服核实充值地址是否正确。</p>
          </div>
        </div>
      </div>
    </template>
    <template v-else-if="$i18n.locale === 'zh-TW'">
      <!-- 標題部分 -->
      <div>
        <h1 class="font-semibold text-gray-800 mb-2 text-7xl">代理商代充值說明</h1>
        <p class="text-gray-500 text-6xl my-3xl leading-snug">
          代理商可以使用其代理餘額為下級會員進行代充值。單次代充值的最低金額為1馬來西亞令吉（MYR），最高金額為10,000馬來西亞令吉（MYR）。
        </p>
      </div>

      <!-- 充值方式部分 -->
      <div>
        <h2 class="font-semibold text-gray-800 mb-2 text-7xl">充值方式</h2>
        <p class="text-gray-500 text-6xl my-3xl leading-snug">
          代充值 - 選擇對應的USDT協議進行轉賬。充值僅接受TRC20/ERC20協議，起始金額為10U，無上限。
        </p>
      </div>

      <!-- 如何代充值部分 -->
      <div>
        <h2 class="font-semibold text-gray-800 mb-2 text-7xl">如何進行代充值</h2>
        <p class="text-gray-500 mb-2 text-6xl my-3xl leading-snug">會員管理 - 操作 - 玩家代充值。</p>
        <p class="text-gray-500 text-6xl my-3xl leading-snug">
          請在進行代充值前設置支付密碼。設置支付密碼的步驟：代理商後台 - 個人中心 - 個人資料 - 在安全信息中設置支付密碼
          <span class="text-red">（可通過綁定的郵箱地址設置；如無法自行設置支付密碼，請聯繫客服）</span>。
        </p>
      </div>

      <!-- 常見轉賬問題部分 -->
      <div>
        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">常見轉賬問題</h2>

        <div class="space-y-4">
          <!-- 問題1 -->
          <div>
            <h3 class="text-gray-500 font-medium mb-1 text-6xl">1. 我在哪裡可以查看代充值記錄？</h3>
            <p class="text-gray-500 my-3xl text-6xl leading-snug">進入財務中心 - 會員代充值 - 代充值記錄，可查看歷史代充值記錄。</p>
          </div>

          <!-- 問題2 -->
          <div>
            <h3 class="text-gray-500 font-medium mb-1 text-6xl">2. 如果轉錯會員怎麼辦？</h3>
            <p class="text-gray-500 my-3xl text-6xl leading-snug">轉賬給錯誤的會員無法扣除和恢復，請在轉賬前確認會員賬號正確。</p>
          </div>

          <!-- 問題3 -->
          <div>
            <h3 class="text-gray-500 font-medium mb-1 text-6xl">3. 如何查看記錄？</h3>
            <p class="text-gray-500 my-3xl text-6xl leading-snug">充值記錄請在"代充值充值"下查看，代充值記錄請在"玩家代充值"下查看。</p>
          </div>

          <!-- 問題4 -->
          <div>
            <h3 class="text-gray-500 font-medium mb-1 text-6xl">4. 為什麼充值地址與實際轉賬地址不同？</h3>
            <p class="text-gray-500 my-3xl text-6xl leading-snug">電腦病毒可能導致頁面地址與實際轉賬地址不同。請勿轉賬，並首先聯繫客服核實充值地址是否正確。</p>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
