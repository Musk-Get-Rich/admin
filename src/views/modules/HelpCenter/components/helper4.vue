<template>  
  <div class="mx-auto px-20 py-6 space-y-8">  
    <template v-if="$i18n.locale === 'en'">  
      <!-- Title Section -->  
      <div>  
        <h1 class="font-semibold text-gray-800 mb-2 text-7xl">Commission Withdrawal Instructions</h1>  
      </div>  

      <!-- Support Info -->  
      <div>  
        <p class="text-gray-500 text-6xl my-3xl leading-snug">  
          We support withdrawals to bank cards and cryptocurrencies.  
        </p>  
      </div>  

      <!-- How to Withdraw Section -->  
      <div>  
        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">How to Withdraw</h2>  

        <div class="space-y-4">  
          <div>  
            <p class="text-gray-500 text-6xl my-3xl leading-snug">  
              1. Log in to the agent backend – Financial Center – Withdrawal Area – Withdrawal Application – Add Withdrawal Method – Enter the withdrawal amount – Confirm the withdrawal.  
            </p>  
          </div>  

          <div>  
            <p class="text-gray-500 text-6xl my-3xl leading-snug">  
              2. Add your withdrawal bank card or cryptocurrency, and follow the verification steps prompted on the page to complete the withdrawal.  
            </p>  
          </div>  
        </div>  
      </div>  
    </template>  

    <template v-else-if="$i18n.locale === 'zh-CN'">  
      <!-- 标题部分 -->  
      <div>  
        <h1 class="font-semibold text-gray-800 mb-2 text-7xl">佣金提现说明</h1>  
      </div>  

      <!-- 支持信息 -->  
      <div>  
        <p class="text-gray-500 text-6xl my-3xl leading-snug">  
          我们支持银行卡和加密货币提现。  
        </p>  
      </div>  

      <!-- 提现方法 -->  
      <div>  
        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">如何提现</h2>  

        <div class="space-y-4">  
          <div>  
            <p class="text-gray-500 text-6xl my-3xl leading-snug">  
              1. 登录代理后台 - 财务中心 - 提现区域 - 提现申请 - 添加提现方式 - 输入提现金额 - 确认提现。  
            </p>  
          </div>  

          <div>  
            <p class="text-gray-500 text-6xl my-3xl leading-snug">  
              2. 添加您的提现银行卡或加密货币，并按照页面提示的验证步骤完成提现。  
            </p>  
          </div>  
        </div>  
      </div>  
    </template>  

    <template v-else-if="$i18n.locale === 'zh-TW'">  
      <!-- 標題部分 -->  
      <div>  
        <h1 class="font-semibold text-gray-800 mb-2 text-7xl">傭金提現說明</h1>  
      </div>  

      <!-- 支持資訊 -->  
      <div>  
        <p class="text-gray-500 text-6xl my-3xl leading-snug">  
          我們支持銀行卡和加密貨幣提現。  
        </p>  
      </div>  

      <!-- 提現方法 -->  
      <div>  
        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">如何提現</h2>  

        <div class="space-y-4">  
          <div>  
            <p class="text-gray-500 text-6xl my-3xl leading-snug">  
              1. 登入代理後台 - 財務中心 - 提現區域 - 提現申請 - 添加提現方式 - 輸入提現金額 - 確認提現。  
            </p>  
          </div>  

          <div>  
            <p class="text-gray-500 text-6xl my-3xl leading-snug">  
              2. 添加您的提現銀行卡或加密貨幣，並按照頁面提示的驗證步驟完成提現。  
            </p>  
          </div>  
        </div>  
      </div>  
    </template>  
  </div>  
</template>