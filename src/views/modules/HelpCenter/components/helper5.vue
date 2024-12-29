<template>
  <div class="mx-auto px-20 py-6 space-y-8">
    <template v-if="$i18n.locale === 'en'">
      <div class="space-y-6 text-gray-700 text-6xl leading-relaxed">  
        <p class="text-6xl leading-snug font-bold mb-5 !mt-15">Agent Deposit Instructions</p>  
        <p class="text-6xl leading-snug">  
          Agents can use their agent balance to make deposits for their downline members, with a minimum deposit amount of 18RM and a maximum deposit amount of 10000RM.  
        </p>  

        <p class="text-6xl leading-snug font-bold mb-5 !mt-15">How to Recharge</p>  
        <p class="text-6xl leading-snug">  
          Member Deposit - Recharge - Select the corresponding wallet for the site, only accepting TRC20/ERC20, with a minimum recharge of 10U, no upper limit.  
        </p>  

        <p class="text-6xl leading-snug font-bold mb-5 !mt-15">How to Make a Deposit</p>  
        <p class="text-6xl leading-snug">  
          Member Management - Operation - Player Deposit  
          <br />  
          Before making a deposit, please set up a payment password. The steps to set the payment password are: Agent backend - Personal Center - Personal Information - Security Information to set the payment password (if you cannot set the payment password yourself, it can be modified/reset by your superior).  
        </p>  

        <p class="text-6xl leading-snug font-bold mb-5 !mt-15">How to Transfer to Other Agents</p>  
        <p class="text-6xl leading-snug">  
          Member Deposit - Agent Transfer - Select the corresponding site wallet to transfer to a third-level agent in the same line (cross-line transfers are not allowed).  
        </p>  

        <p class="text-6xl leading-snug font-bold mb-5 !mt-15">Common Transfer Questions</p>  
        <ol class="list-decimal pl-8 space-y-2 list-none">  
          <li>  
            <p class="text-6xl leading-snug font-bold mb-5 !mt-15">A. Where can I check my deposit records?</p>  
            <p class="text-6xl leading-snug">  
              In the Finance Center - Member Deposit - Deposit Records to view historical deposit records;  
            </p>  
          </li>  
          <li>  
            <p class="text-6xl leading-snug font-bold mb-5 !mt-15">B. What if I recharge to the wrong wallet?</p>  
            <p class="text-6xl leading-snug">  
              If you recharge to the wrong wallet, it cannot be deducted or refunded. Please confirm the site wallet you selected before recharging.  
            </p>  
          </li>  
          <li>  
            <p class="text-6xl leading-snug font-bold mb-5 !mt-15">C. What if I transfer to the wrong agent/site wallet?</p>  
            <p class="text-6xl leading-snug">  
              If you transfer to the wrong agent or site wallet, it cannot be deducted or refunded. Please confirm the agent account and site wallet before transferring.  
            </p>  
          </li>  
          <li>  
            <p class="text-6xl leading-snug font-bold mb-5 !mt-15">D. How to query records</p>  
            <p class="text-6xl leading-snug">  
              On the Member Deposit page, there are deposit records, transfer records, and recharge records available for querying relevant operation records.  
            </p>  
          </li>  
        </ol>  
      </div>
    </template>
    <template v-else-if="$i18n.locale === 'zh-CN'">
      <div class="space-y-6 text-gray-700 text-6xl leading-relaxed">
        <p class="text-6xl leading-snug font-bold mb-5 !mt-15">代理代存说明</p>
        <p class="text-6xl leading-snug">
          代理可以将代理余额给自身下线会员进行代存，单笔最低代存金额为18RM，最高代存金额为10000RM。
        </p>

        <p class="text-6xl leading-snug font-bold mb-5 !mt-15">如何充值</p>
        <p class="text-6xl leading-snug">
          会员代存- 充值 - 选择对应站点的钱包，充值仅接受TRC20/ERC20，充值10U起，无上限
        </p>

        <p class="text-6xl leading-snug font-bold mb-5 !mt-15">如何代存</p>
        <p class="text-6xl leading-snug">
          会员管理 - 操作 - 玩家代存
          <br />
          代存前请先设置支付密码，支付密码设置步骤：代理代理后台 - 个人中心 - 个人资料 - 安全信息设置支付密码即可（无法自行设置支付密码可以通过上级修改/重置）
        </p>

        <p class="text-6xl leading-snug font-bold mb-5 !mt-15">如何向其他代理转账</p>
        <p class="text-6xl leading-snug">
          会员代存- 代理转账 - 选择对应站点钱包即可向同一级代理线的三级代理转账（无法跨线转账）
        </p>

        <p class="text-6xl leading-snug font-bold mb-5 !mt-15">转账常见问题</p>
        <ol class="list-decimal pl-8 space-y-2 list-none">
          <li>
            <p class="text-6xl leading-snug font-bold mb-5 !mt-15">A、在哪里查看我的代存记录？</p>
            <p class="text-6xl leading-snug">
              在财务中心 - 会员代存 - 代存记录即可查看历史代存记录；
            </p>
          </li>
          <li>
            <p class="text-6xl leading-snug font-bold mb-5 !mt-15">B、充值错钱包了怎么办？</p>
            <p class="text-6xl leading-snug">
              充值错钱包将无法扣除补回，充值前请确认选择的站点钱包
            </p>
          </li>
          <li>
            <p class="text-6xl leading-snug font-bold mb-5 !mt-15">C、转错代理/站点钱包怎么办？</p>
            <p class="text-6xl leading-snug">
              转错代理或转错站点钱包将无法扣除补回，转账前请确认代理账号以及站点钱包
            </p>
          </li>
          <li>
            <p class="text-6xl leading-snug font-bold mb-5 !mt-15">D、如何查询记录</p>
            <p class="text-6xl leading-snug">
              会员代存页面，有代存记录、转账记录、充值记录可查询对应的操作记录
            </p>
          </li>
        </ol>
      </div>
    </template>
    <template v-else-if="$i18n.locale === 'zh-TW'">
      <div class="space-y-6 text-gray-700 text-6xl leading-relaxed">  
        <p class="text-6xl leading-snug font-bold mb-5 !mt-15">代理代存說明</p>  
        <p class="text-6xl leading-snug">  
          代理可以將代理餘額給自身下線會員進行代存，單筆最低代存金額為18RM，最高代存金額為10000RM。  
        </p>  

        <p class="text-6xl leading-snug font-bold mb-5 !mt-15">如何充值</p>  
        <p class="text-6xl leading-snug">  
          會員代存 - 充值 - 選擇對應站點的錢包，充值僅接受TRC20/ERC20，充值10U起，無上限。  
        </p>  

        <p class="text-6xl leading-snug font-bold mb-5 !mt-15">如何代存</p>  
        <p class="text-6xl leading-snug">  
          會員管理 - 操作 - 玩家代存  
          <br />  
          代存前請先設置支付密碼，支付密碼設置步驟：代理代理後台 - 個人中心 - 個人資料 - 安全信息設置支付密碼即可（無法自行設置支付密碼可以通過上級修改/重置）。  
        </p>  

        <p class="text-6xl leading-snug font-bold mb-5 !mt-15">如何向其他代理轉帳</p>  
        <p class="text-6xl leading-snug">  
          會員代存 - 代理轉帳 - 選擇對應站點錢包即可向同一級代理線的三級代理轉帳（無法跨線轉帳）。  
        </p>  

        <p class="text-6xl leading-snug font-bold mb-5 !mt-15">轉帳常見問題</p>  
        <ol class="list-decimal pl-8 space-y-2 list-none">  
          <li>  
            <p class="text-6xl leading-snug font-bold mb-5 !mt-15">A、在哪裡查看我的代存記錄？</p>  
            <p class="text-6xl leading-snug">  
              在財務中心 - 會員代存 - 代存記錄即可查看歷史代存記錄；  
            </p>  
          </li>  
          <li>  
            <p class="text-6xl leading-snug font-bold mb-5 !mt-15">B、充值錯錢包了怎麼辦？</p>  
            <p class="text-6xl leading-snug">  
              充值錯錢包將無法扣除補回，充值前請確認選擇的站點錢包。  
            </p>  
          </li>  
          <li>  
            <p class="text-6xl leading-snug font-bold mb-5 !mt-15">C、轉錯代理/站點錢包怎麼辦？</p>  
            <p class="text-6xl leading-snug">  
              轉錯代理或轉錯站點錢包將無法扣除補回，轉帳前請確認代理帳號以及站點錢包。  
            </p>  
          </li>  
          <li>  
            <p class="text-6xl leading-snug font-bold mb-5 !mt-15">D、如何查詢記錄</p>  
            <p class="text-6xl leading-snug">  
              會員代存頁面，有代存記錄、轉帳記錄、充值記錄可查詢對應的操作記錄。  
            </p>  
          </li>  
        </ol>  
      </div>
    </template>
  </div>
</template>
