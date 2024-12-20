<template>
  <div class="mx-auto px-20 py-6 space-y-8">
    <template v-if="$i18n.locale === 'en'">
      <!-- Title and Introduction -->
      <div>
        <p class="text-gray-500 text-6xl my-3xl leading-snug">
          Gift Bonus Explanation
        </p>
        <p class="text-red text-6xl my-3xl leading-snug">
          Gift Bonus Balance – Gift bonus amount is distributed based on the number of valid members under the agent in
          the previous month. It can only be used for activities and cannot be used for illegal withdrawals.
        </p>
        <p class="text-gray-500 text-6xl my-3xl leading-snug">
          Agents can gift the bonus from their own gift bonus wallet to their subordinates.
        </p>
      </div>

      <!-- Gift Bonus Rules -->
      <div>
        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">1. Gift Bonus Rules</h2>
        <div class="space-y-4">
          <p class="text-gray-500 text-6xl leading-snug">
            ①Virtual currency users need to deposit a certain number of times before they can gift a bonus (there is no
            standard for the number of deposits; the system will detect if there is any abnormal behavior by members to
            decide whether to start the gift bonus earlier or later).
          </p>
          <p class="text-gray-500 text-6xl leading-snug">
            ②Users who have not bound withdrawal information can gift a bonus. The maximum gift bonus limit (in local
            currency) is:
          </p>
          <div class="ml-8 text-gray-500 text-6xl">
            <p>Hong Kong: 200</p>
            <p>Malaysia: 88</p>
            <p>Vietnam: 200</p>
          </div>
          <p class="text-red text-6xl">Note: Users with overlapping devices are not allowed to gift.</p>
          <p class="text-gray-500 text-6xl leading-snug">
            ③For users who have bound withdrawal information but have not made deposits, the maximum gift bonus limit
            (in
            local currency) is:
          </p>
          <p class="text-gray-500 text-6xl">For risk-free users:</p>
          <div class="ml-8 text-gray-500 text-6xl">
            <p>Hong Kong: 200</p>
            <p>Malaysia: 88</p>
            <p>Vietnam: 488</p>
          </div>
          <p class="text-gray-500 text-6xl">For risky users:</p>
          <div class="ml-8 text-gray-500 text-6xl">
            <p>Hong Kong: 88</p>
            <p>Malaysia: 18</p>
            <p>Vietnam: 488</p>
          </div>
          <p class="text-gray-500 text-6xl leading-snug">
            ④For users who have bound withdrawal information and have made deposits, the maximum gift bonus limit (in
            local currency) is:
          </p>
          <div class="ml-8 text-gray-500 text-6xl">
            <p>Hong Kong: 588</p>
            <p>Malaysia: 188</p>
            <p>Vietnam: 588</p>
          </div>
          <p class="text-gray-500 text-6xl leading-snug">⑤Active Users:</p>
          <p class="text-gray-500 text-6xl leading-snug">
            A. Active users whose effective betting amount is less than three times the deposit amount cannot gift the
            bonus (this does not affect users above VIP3 and users of the Hong Kong site).
          </p>
          <p class="text-gray-500 text-6xl leading-snug">
            B. For active users, the maximum gift bonus limit (in local currency) is:
          </p>
          <p class="text-gray-500 text-6xl">For risk-free users:</p>
          <div class="ml-8 text-gray-500 text-6xl">
            <p>Hong Kong: 588</p>
            <p>Malaysia: 388</p>
            <p>Vietnam: 588</p>
          </div>
          <p class="text-gray-500 text-6xl">For risky users:</p>
          <div class="ml-8 text-gray-500 text-6xl">
            <p>Hong Kong: 388</p>
            <p>Malaysia: 188</p>
            <p>Vietnam: 588</p>
          </div>
        </div>
      </div>

      <!-- Additional Rules -->
      <div class="space-y-6">
        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">
          2. The unit of the gift bonus is USD, and the amount gifted is converted into the currency of the member's
          region based on the international exchange rate of the day.
        </h2>

        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">
          3. Monthly bonuses are issued based on the number of active members from the previous month. The bonuses do
          not
          accumulate and are reset at the end of each month. The issuance standards are as follows:
        </h2>
        <div class="ml-8 text-gray-500 text-6xl">
          <p>Vietnam site: 1 active member = 1 USD</p>
          <p>Malaysia site: 1 active member = 30 USD</p>
          <p>Hong Kong site: 1 active member = 50 USD</p>
        </div>

        <h3 class="font-semibold text-gray-800 text-7xl">4. Valid Members:</h3>
        <div class="ml-8 text-gray-500 text-6xl space-y-2">
          <p>① Malaysia (MYR)</p>
          <p>Deposit >200</p>
          <p>Effective Betting >600</p>
          <p>② Hong Kong (HKD)</p>
          <p>Deposit >300</p>
          <p>Effective Betting >900</p>
          <p>③ Vietnam (Kđ)</p>
          <p>Deposit >1000</p>
          <p>Effective Betting >3000</p>
        </div>

        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">
          5. Agents cannot apply for more gift bonus amount once used up; they can only wait for the next month's
          distribution based on the number of valid members, distributed on the 1st of every month.
        </h2>

        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">
          6. Agents gifting the bonus can freely adjust the multiplier for wagering requirements; if not set, the
          default
          is 1x.
        </h2>

        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">
          7. The monthly gift bonus giving limit for members (in local currency) is:
        </h2>
        <div class="ml-8 text-gray-500 text-6xl">
          <p>VIP1: 1500</p>
          <p>VIP2: 2000</p>
          <p>VIP3: 3000</p>
          <p>VIP4: 5000</p>
          <p>VIP5: 10000</p>
          <p>VIP6 and above: No limit</p>
        </div>
        <p class="text-gray-500 text-6xl italic">
          Note: Members who reach the gift limit can increase their limit through natural upgrading. The limit cannot be
          gifted again in the same month once reached, and the marketing department will close applications for proxy
          gifting.
        </p>
      </div>

      <!-- How to Gift Bonus -->
      <div>
        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">How to Gift Bonus</h2>
        <p class="text-gray-500 text-6xl leading-snug">
          Log in to the agent backend – Member Management – Operation – Gift Bonus.
        </p>
        <p class="text-gray-500 text-6xl leading-snug">
          Please set a payment password before gifting the bonus. Steps to set a payment password: Agent backend –
          Personal Profile – Security Information – Set Payment Password.
        </p>
        <p class="text-red text-6xl italic">
          (If you cannot set the payment password yourself, please contact group customer service or online customer
          service for assistance)
        </p>
      </div>

      <!-- Common Questions -->
      <div>
        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">Common Questions about Bonus Gifting</h2>
        <div class="space-y-4">
          <div>
            <p class="text-gray-500 text-6xl font-medium">1. Can the monthly bonus be carried over to the next month?
            </p>
            <p class="text-gray-500 text-6xl leading-snug">
              The bonus is reset to zero in the last 12 hours of the last day of each month and does not carry over to
              the
              next month.
            </p>
          </div>

          <div>
            <p class="text-gray-500 text-6xl font-medium">2. Where can I view my bonus gifting records?</p>
            <p class="text-gray-500 text-6xl leading-snug">
              Answer: Go to Withdrawal and Deposit Records – Select 'Agent Bonus' under All Types – Choose the date and
              click search to view the bonus gifting records.
            </p>
          </div>

          <div>
            <p class="text-gray-500 text-6xl font-medium">3. How is the gifting limit for individual members handled?
            </p>
            <p class="text-gray-500 text-6xl leading-snug">
              Answer: Members who reach the gifting limit can increase their limit through natural upgrading. The limit
              cannot be gifted again in the same month.
            </p>
          </div>

          <div>
            <p class="text-gray-500 text-6xl font-medium">4. How does a member claim a gifted bonus?</p>
            <p class="text-gray-500 text-6xl leading-snug">
              After successful gifting, members need to log in to the APP and claim it in the red packet floating window
              on the homepage.
            </p>
            <p class="text-red text-6xl">Note: For the first claim, a deposit is required before claiming, with no
              restriction on the deposit amount.</p>
          </div>

          <div>
            <p class="text-gray-500 text-6xl font-medium">5. What to do if the gifting is wrong?</p>
            <p class="text-gray-500 text-6xl leading-snug">
              If there is a mistake in gifting, please contact customer service immediately to check if the bet has been
              placed. Bonuses that have been wagered cannot be deducted; bonuses not yet claimed cannot be deducted and
              must be claimed by the member before deduction. Please carefully check the account and amount before
              gifting.
            </p>
          </div>
        </div>
      </div>
    </template>
    <template v-else-if="$i18n.locale === 'zh-CN'">
      <!-- 标题和介绍 -->
      <div>
        <p class="text-gray-500 text-6xl my-3xl leading-snug">
          礼金红包说明
        </p>
        <p class="text-red text-6xl my-3xl leading-snug">
          礼金余额 - 礼金数量根据代理上月有效会员数量分配。仅可用于活动，不可用于非法提现。
        </p>
        <p class="text-gray-500 text-6xl my-3xl leading-snug">
          代理可以从自己的礼金钱包向下级发放礼金。
        </p>
      </div>

      <!-- 礼金规则 -->
      <div>
        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">1. 礼金规则</h2>
        <div class="space-y-4">
          <p class="text-gray-500 text-6xl leading-snug">
            ①虚拟货币用户需要多次充值后才能发放礼金（充值次数无标准；系统将检测会员是否存在异常行为，决定是否提前或推迟发放礼金）。
          </p>
          <p class="text-gray-500 text-6xl leading-snug">
            ②未绑定提现信息的用户可发放礼金。最大礼金限额（本地货币）为：
          </p>
          <div class="ml-8 text-gray-500 text-6xl">
            <p>香港：200</p>
            <p>马来西亚：88</p>
            <p>越南：200</p>
          </div>
          <p class="text-red text-6xl">注意：禁止设备重叠的用户发放礼金。</p>
          <p class="text-gray-500 text-6xl leading-snug">
            ③对于已绑定提现信息但未充值的用户，最大礼金限额（本地货币）为：
          </p>
          <p class="text-gray-500 text-6xl">无风险用户：</p>
          <div class="ml-8 text-gray-500 text-6xl">
            <p>香港：200</p>
            <p>马来西亚：88</p>
            <p>越南：488</p>
          </div>
          <p class="text-gray-500 text-6xl">高风险用户：</p>
          <div class="ml-8 text-gray-500 text-6xl">
            <p>香港：88</p>
            <p>马来西亚：18</p>
            <p>越南：488</p>
          </div>
          <p class="text-gray-500 text-6xl leading-snug">
            ④对于已绑定提现信息且已充值的用户，最大礼金限额（本地货币）为：
          </p>
          <div class="ml-8 text-gray-500 text-6xl">
            <p>香港：588</p>
            <p>马来西亚：188</p>
            <p>越南：588</p>
          </div>
          <p class="text-gray-500 text-6xl leading-snug">⑤活跃用户：</p>
          <p class="text-gray-500 text-6xl leading-snug">
            A. 有效投注金额少于充值金额三倍的活跃用户不能发放礼金（不影响VIP3以上用户和香港站点用户）。
          </p>
          <p class="text-gray-500 text-6xl leading-snug">
            B. 对于活跃用户，最大礼金限额（本地货币）为：
          </p>
          <p class="text-gray-500 text-6xl">无风险用户：</p>
          <div class="ml-8 text-gray-500 text-6xl">
            <p>香港：588</p>
            <p>马来西亚：388</p>
            <p>越南：588</p>
          </div>
          <p class="text-gray-500 text-6xl">高风险用户：</p>
          <div class="ml-8 text-gray-500 text-6xl">
            <p>香港：388</p>
            <p>马来西亚：188</p>
            <p>越南：588</p>
          </div>
        </div>
      </div>

      <!-- 其他规则部分 -->
      <div class="space-y-6">
        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">
          2. 礼金单位为美元，发放金额按当日国际汇率转换为会员所在地区的货币。
        </h2>

        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">
          3. 每月奖金根据上月活跃会员数量发放。奖金不累积，每月末重置。发放标准如下：
        </h2>
        <div class="ml-8 text-gray-500 text-6xl">
          <p>越南站点：1个活跃会员 = 1美元</p>
          <p>马来西亚站点：1个活跃会员 = 30美元</p>
          <p>香港站点：1个活跃会员 = 50美元</p>
        </div>

        <h3 class="font-semibold text-gray-800 text-7xl">4. 有效会员：</h3>
        <div class="ml-8 text-gray-500 text-6xl space-y-2">
          <p>① 马来西亚（马来西亚令吉）</p>
          <p>充值 >200</p>
          <p>有效投注 >600</p>
          <p>② 香港（港币）</p>
          <p>充值 >300</p>
          <p>有效投注 >900</p>
          <p>③ 越南（越南盾）</p>
          <p>充值 >1000</p>
          <p>有效投注 >3000</p>
        </div>
        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">
          5. 代理一旦使用完礼金额度，不能再申请；只能等待下月根据有效会员数量分配，每月1日发放。
        </h2>

        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">
          6. 代理发放礼金可以自由调整流水倍数；如不设置，默认为1倍。
        </h2>

        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">
          7. 会员每月礼金发放限额（本地货币）：
        </h2>
        <div class="ml-8 text-gray-500 text-6xl">
          <p>VIP1：1500</p>
          <p>VIP2：2000</p>
          <p>VIP3：3000</p>
          <p>VIP4：5000</p>
          <p>VIP5：10000</p>
          <p>VIP6及以上：无限制</p>
        </div>
        <p class="text-gray-500 text-6xl italic">
          注意：达到礼金限额的会员可通过自然升级增加限额。同一月内达到限额后不可再次发放，市场部将关闭代理发放申请。
        </p>
      </div>

      <!-- 如何发放礼金 -->
      <div>
        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">如何发放礼金</h2>
        <p class="text-gray-500 text-6xl leading-snug">
          登录代理后台 - 会员管理 - 操作 - 礼金发放。
        </p>
        <p class="text-gray-500 text-6xl leading-snug">
          请在发放礼金前设置支付密码。设置支付密码步骤：代理后台 - 个人资料 - 安全信息 - 设置支付密码。
        </p>
        <p class="text-red text-6xl italic">
          （如无法自行设置支付密码，请联系集团客服或在线客服协助）
        </p>
      </div>

      <!-- 常见问题 -->
      <div>
        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">关于礼金发放的常见问题</h2>
        <div class="space-y-4">
          <div>
            <p class="text-gray-500 text-6xl font-medium">1. 每月奖金可以结转到下个月吗？</p>
            <p class="text-gray-500 text-6xl leading-snug">
              奖金在每月最后一天的最后12小时重置为零，不会结转到下个月。
            </p>
          </div>

          <div>
            <p class="text-gray-500 text-6xl font-medium">2. 我在哪里可以查看礼金发放记录？</p>
            <p class="text-gray-500 text-6xl leading-snug">
              答：进入提现和充值记录 - 在所有类型中选择"代理奖金" - 选择日期并点击搜索即可查看礼金发放记录。
            </p>
          </div>

          <div>
            <p class="text-gray-500 text-6xl font-medium">3. 个人会员的发放限额如何处理？</p>
            <p class="text-gray-500 text-6xl leading-snug">
              答：达到发放限额的会员可以通过自然升级增加限额。同一月内不能再次发放。
            </p>
          </div>

          <div>
            <p class="text-gray-500 text-6xl font-medium">4. 会员如何领取礼金？</p>
            <p class="text-gray-500 text-6xl leading-snug">
              成功发放后，会员需要登录APP，在主页的红包悬浮窗口领取。
            </p>
            <p class="text-red text-6xl">注意：首次领取需要先充值，对充值金额没有限制。</p>
          </div>

          <div>
            <p class="text-gray-500 text-6xl font-medium">5. 发放错误怎么办？</p>
            <p class="text-gray-500 text-6xl leading-snug">
              如发放有误，请立即联系客服核实是否已下注。已下注的奖金无法扣除；未领取的奖金无法扣除，必须由会员领取后才能扣除。请在发放前仔细检查账号和金额。
            </p>
          </div>
        </div>
      </div>
    </template>
    <template v-else-if="$i18n.locale === 'zh-TW'">
      <!-- 標題和介紹 -->
      <div>
        <p class="text-gray-500 text-6xl my-3xl leading-snug">
          禮金紅包說明
        </p>
        <p class="text-red text-6xl my-3xl leading-snug">
          禮金餘額 - 禮金數量根據代理上月有效會員數量分配。僅可用於活動，不可用於非法提現。
        </p>
        <p class="text-gray-500 text-6xl my-3xl leading-snug">
          代理可以從自己的禮金錢包向下級發放禮金。
        </p>
      </div>

      <!-- 禮金規則 -->
      <div>
        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">1. 禮金規則</h2>
        <div class="space-y-4">
          <p class="text-gray-500 text-6xl leading-snug">
            ①虛擬貨幣用戶需要多次充值後才能發放禮金（充值次數無標準；系統將檢測會員是否存在異常行為，決定是否提前或推遲發放禮金）。
          </p>
          <p class="text-gray-500 text-6xl leading-snug">
            ②未綁定提現資訊的用戶可發放禮金。最大禮金限額（本地貨幣）為：
          </p>
          <div class="ml-8 text-gray-500 text-6xl">
            <p>香港：200</p>
            <p>馬來西亞：88</p>
            <p>越南：200</p>
          </div>
          <p class="text-red text-6xl">注意：禁止設備重疊的用戶發放禮金。</p>
          <p class="text-gray-500 text-6xl leading-snug">
            ③對於已綁定提現資訊但未充值的用戶，最大禮金限額（本地貨幣）為：
          </p>
          <p class="text-gray-500 text-6xl">無風險用戶：</p>
          <div class="ml-8 text-gray-500 text-6xl">
            <p>香港：200</p>
            <p>馬來西亞：88</p>
            <p>越南：488</p>
          </div>
          <p class="text-gray-500 text-6xl">高風險用戶：</p>
          <div class="ml-8 text-gray-500 text-6xl">
            <p>香港：88</p>
            <p>馬來西亞：18</p>
            <p>越南：488</p>
          </div>
          <p class="text-gray-500 text-6xl leading-snug">
            ④對於已綁定提現資訊且已充值的用戶，最大禮金限額（本地貨幣）為：
          </p>
          <div class="ml-8 text-gray-500 text-6xl">
            <p>香港：588</p>
            <p>馬來西亞：188</p>
            <p>越南：588</p>
          </div>
          <p class="text-gray-500 text-6xl leading-snug">⑤活躍用戶：</p>
          <p class="text-gray-500 text-6xl leading-snug">
            A. 有效投注金額少於充值金額三倍的活躍用戶不能發放禮金（不影響VIP3以上用戶和香港站點用戶）。
          </p>
          <p class="text-gray-500 text-6xl leading-snug">
            B. 對於活躍用戶，最大禮金限額（本地貨幣）為：
          </p>
          <p class="text-gray-500 text-6xl">無風險用戶：</p>
          <div class="ml-8 text-gray-500 text-6xl">
            <p>香港：588</p>
            <p>馬來西亞：388</p>
            <p>越南：588</p>
          </div>
          <p class="text-gray-500 text-6xl">高風險用戶：</p>
          <div class="ml-8 text-gray-500 text-6xl">
            <p>香港：388</p>
            <p>馬來西亞：188</p>
            <p>越南：588</p>
          </div>
        </div>
      </div>

      <!-- 其他規則 -->
      <div class="space-y-6">
        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">
          2. 禮金單位為美元，發放金額按當日國際匯率轉換為會員所在地區的貨幣。
        </h2>

        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">
          3. 每月獎金根據上月活躍會員數量發放。獎金不累積，每月末重置。發放標準如下：
        </h2>
        <div class="ml-8 text-gray-500 text-6xl">
          <p>越南站點：1個活躍會員 = 1美元</p>
          <p>馬來西亞站點：1個活躍會員 = 30美元</p>
          <p>香港站點：1個活躍會員 = 50美元</p>
        </div>

        <h3 class="font-semibold text-gray-800 text-7xl">4. 有效會員：</h3>
        <div class="ml-8 text-gray-500 text-6xl space-y-2">
          <p>① 馬來西亞（馬來西亞令吉）</p>
          <p>充值 >200</p>
          <p>有效投注 >600</p>
          <p>② 香港（港幣）</p>
          <p>充值 >300</p>
          <p>有效投注 >900</p>
          <p>③ 越南（越南盾）</p>
          <p>充值 >1000</p>
          <p>有效投注 >3000</p>
        </div>

        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">
          5. 代理一旦使用完禮金額度，不能再申請；只能等待下月根據有效會員數量分配，每月1日發放。
        </h2>

        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">
          6. 代理發放禮金可以自由調整流水倍數；如不設置，默認為1倍。
        </h2>

        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">
          7. 會員每月禮金發放限額（本地貨幣）：
        </h2>
        <div class="ml-8 text-gray-500 text-6xl">
          <p>VIP1：1500</p>
          <p>VIP2：2000</p>
          <p>VIP3：3000</p>
          <p>VIP4：5000</p>
          <p>VIP5：10000</p>
          <p>VIP6及以上：無限制</p>
        </div>
        <p class="text-gray-500 text-6xl italic">
          注意：達到禮金限額的會員可透過自然升級增加限額。同一月內達到限額後不可再次發放，市場部將關閉代理發放申請。
        </p>
      </div>

      <!-- 如何發放禮金 -->
      <div>
        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">如何發放禮金</h2>
        <p class="text-gray-500 text-6xl leading-snug">
          登錄代理後台 - 會員管理 - 操作 - 禮金發放。
        </p>
        <p class="text-gray-500 text-6xl leading-snug">
          請在發放禮金前設置支付密碼。設置支付密碼步驟：代理後台 - 個人資料 - 安全資訊 - 設置支付密碼。
        </p>
        <p class="text-red text-6xl italic">
          （如無法自行設置支付密碼，請聯繫集團客服或線上客服協助）
        </p>
      </div>

      <!-- 常見問題 -->
      <div>
        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">關於禮金發放的常見問題</h2>
        <div class="space-y-4">
          <div>
            <p class="text-gray-500 text-6xl font-medium">1. 每月獎金可以結轉到下個月嗎？</p>
            <p class="text-gray-500 text-6xl leading-snug">
              獎金在每月最後一天的最後12小時重置為零，不會結轉到下個月。
            </p>
          </div>

          <div>
            <p class="text-gray-500 text-6xl font-medium">2. 我在哪裡可以查看禮金發放記錄？</p>
            <p class="text-gray-500 text-6xl leading-snug">
              答：進入提現和充值記錄 - 在所有類型中選擇"代理獎金" - 選擇日期並點擊搜索即可查看禮金發放記錄。
            </p>
          </div>

          <div>
            <p class="text-gray-500 text-6xl font-medium">3. 個人會員的發放限額如何處理？</p>
            <p class="text-gray-500 text-6xl leading-snug">
              答：達到發放限額的會員可以透過自然升級增加限額。同一月內不能再次發放。
            </p>
          </div>

          <div>
            <p class="text-gray-500 text-6xl font-medium">4. 會員如何領取禮金？</p>
            <p class="text-gray-500 text-6xl leading-snug">
              成功發放後，會員需要登錄APP，在主頁的紅包懸浮窗口領取。
            </p>
            <p class="text-red text-6xl">注意：首次領取需要先充值，對充值金額沒有限制。</p>
          </div>

          <div>
            <p class="text-gray-500 text-6xl font-medium">5. 發放錯誤怎麼辦？</p>
            <p class="text-gray-500 text-6xl leading-snug">
              如發放有誤，請立即聯繫客服核實是否已下注。已下注的獎金無法扣除；未領取的獎金無法扣除，必須由會員領取後才能扣除。請在發放前仔細檢查帳號和金額。
            </p>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
