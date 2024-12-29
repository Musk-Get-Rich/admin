<template>  
  <div class="mx-auto px-20 py-6 space-y-8 text-gray-800">  
    <template v-if="$i18n.locale === 'en'">  
      <h1 class="font-semibold mb-2 text-7xl">Bonus Rules</h1>  

      <div class="space-y-6 text-gray-700 text-lg leading-relaxed">  
        <p class="text-6xl leading-snug mb-5">1. Distribution Rules</p>  
        <ul class="text-6xl leading-snug list-none pl-25 !mt-0">  
          <li>Members without linked withdrawal information cannot distribute bonuses.</li>  
          <li>Note: Users with device reset are not allowed to distribute.</li>  
          <li>The limit for bonuses after binding withdrawal information: 200.</li>  
          <li>Active members can only distribute 30% of their last deposit amount each time.</li>  
          <li>Note: If the last deposit is 1000, the maximum bonus can be 300. After updating the next deposit, the 30% distribution will resume.</li>  
        </ul>  

        <p class="text-6xl leading-snug">2. Bonuses are in local currency.</p>  

        <p class="text-6xl leading-snug">3. The monthly distribution is based on the number of active members: 1 active member = 300 bonuses, not including the current month’s reset.</p>  

        <p class="text-6xl leading-snug">4. Standard: Deposit amount must be greater than or equal to 2000.</p>  

        <p class="text-6xl leading-snug">5. Agent bonus limits can only be applied after use, and can only be distributed based on the next month’s number of active members. Distribution time: 1st of each month.</p>  

        <p class="text-6xl leading-snug">6. Agents can adjust the bonus distribution multiplier; if not set, there will be no wagering requirement.</p>  

        <p class="text-6xl leading-snug mb-5">7. Each member has a monthly bonus distribution limit (local currency).</p>  
        <ul class="text-6xl leading-snug list-none pl-25 !mt-0">  
          <li>VIP1: 1500</li>  
          <li>VIP2: 2000</li>  
          <li>VIP3: 3000</li>  
          <li>VIP4: 5000</li>  
          <li>VIP5: 10000</li>  
          <li>VIP6: Unlimited</li>  
        </ul>  

        <p class="text-6xl leading-snug">8. Note: Members with a bonus limit can apply for an upgrade through natural means. The monthly limit cannot be distributed again; the marketing department will close the proxy donation application.</p>  
      </div>  
    </template>  

    <template v-else-if="$i18n.locale === 'zh-CN'"> 
      <h1 class="font-semibold mb-2 text-7xl">彩金规则</h1>  
    
      <div class="space-y-6 text-gray-700 text-lg leading-relaxed">  
        <p class="text-6xl leading-snug mb-5">1、赠送规则</p>  
        <ul class="text-6xl leading-snug list-none pl-25 !mt-0">  
          <li>未绑定提款信息的会员不能赠送彩金</li>  
          <li>注：设备重置用户不允许赠送</li>  
          <li>绑定提款信息后所赠用户彩金赠送上限：200</li>  
          <li>正常活跃会员每次赠送彩金只能赠送该会员最后一笔款金额的30%</li>  
          <li>注：如该会员最后一笔款为1000，赠送彩金最多赠送300，更新下一次存款后将重新可以赠送30%</li>  
        </ul>  

        <p class="text-6xl leading-snug">2、彩金单位为本地货币</p>  

        <p class="text-6xl leading-snug">3、每月根据上个有有效会员数量放彩金额度，1有效=300彩金，不算加当月清零</p>  

        <p class="text-6xl leading-snug">4、有效会判定标准：存款金额大于或等于2000</p>  

        <p class="text-6xl leading-snug">5、代理彩金额度使用完完申请，只能等下月根据有效会员数量发放，发放时间：每月1号</p>  

        <p class="text-6xl leading-snug">6、代理彩金赠送时可自行调整倍率，不设定则无需打码量</p>  

        <p class="text-6xl leading-snug mb-5">7、会每月彩金赠送上限（当地货币）</p>  
        <ul class="text-6xl leading-snug list-none pl-25 !mt-0">  
          <li>VIP1: 1500</li>  
          <li>VIP2: 2000</li>  
          <li>VIP3: 3000</li>  
          <li>VIP4: 5000</li>  
          <li>VIP5: 10000</li>  
          <li>VIP6: 以上不限</li>  
        </ul>  
        
        <p class="text-6xl leading-snug">8、注：赠送上限的会员可以通过自然升级提升额度，当月上限无法再次赠送，营销部门关闭代赠申请。</p>  
      </div> 
    </template>  

    <template v-else-if="$i18n.locale === 'zh-TW'">  
      <h1 class="font-semibold mb-2 text-7xl">彩金規則</h1>  

      <div class="space-y-6 text-gray-700 text-lg leading-relaxed">  
        <p class="text-6xl leading-snug mb-5">1. 贈送規則</p>  
        <ul class="text-6xl leading-snug list-none pl-25 !mt-0">  
          <li>未綁定提款資訊的會員不能贈送彩金</li>  
          <li>注：設備重置用戶不允許贈送</li>  
          <li>綁定提款資訊後所贈用戶彩金贈送上限：200</li>  
          <li>正常活躍會員每次贈送彩金只能贈送該會員最後一筆款項金額的30%</li>  
          <li>注：如該會員最後一筆款為1000，贈送的彩金最多贈送300，更新下一次存款後將可以重新贈送30%</li>  
        </ul>  

        <p class="text-6xl leading-snug">2. 彩金單位為本地貨幣</p>  

        <p class="text-6xl leading-snug">3. 每月根據上個有效會員數量放彩金額度，1有效=300彩金，不算加當月清零</p>  

        <p class="text-6xl leading-snug">4. 有效會判定標準：存款金額大於或等於2000</p>  

        <p class="text-6xl leading-snug">5. 代理彩金額度使用完後申請，只能等下月根據有效會員數量發放，發放時間：每月1號</p>  

        <p class="text-6xl leading-snug">6. 代理彩金贈送時可自行調整倍率，不設定則無需打碼量</p>  

        <p class="text-6xl leading-snug mb-5">7. 會員每月彩金贈送上限（當地貨幣）</p>  
        <ul class="text-6xl leading-snug list-none pl-25 !mt-0">  
          <li>VIP1: 1500</li>  
          <li>VIP2: 2000</li>  
          <li>VIP3: 3000</li>  
          <li>VIP4: 5000</li>  
          <li>VIP5: 10000</li>  
          <li>VIP6: 以上不限</li>  
        </ul>  

        <p class="text-6xl leading-snug">8. 注：贈送上限的會員可以通過自然升級提升額度，當月上限無法再次贈送，營銷部門關閉代贈申請。</p>  
      </div>
    </template>  
  </div>  
</template>  

<script>  
export default {  
  name: 'BonusRules',  
}  
</script>  
