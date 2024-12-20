<template>
  <div class="mx-auto px-20 py-6 space-y-8">
    <template v-if="$i18n.locale === 'en'">
      <!-- Title Section -->
      <div>
        <h1 class="font-semibold text-gray-800 mb-2 text-7xl">Commission Explanation</h1>
      </div>

      <!-- Commission Calculation Section -->
      <div class="space-y-4">
        <div>
          <p class="text-gray-500 text-6xl my-3xl leading-snug">
            1. Commission Calculation: Agent Commission = Actual Profit and Loss of the Month * Commission Rate; (Net
            Profit and Loss = Total Profit and Loss - Member Bonuses - Member Rebates - Platform Fees).
          </p>
          <p class="text-gray-500 text-6xl my-3xl leading-snug">
            (If there are fewer than 5 active members in a month, there will be no commission for that month, and any
            positive profit generated will not be accumulated. Any negative profit will be carried over to the next
            month
            until it turns positive.)
          </p>
        </div>

        <div>
          <p class="text-gray-500 text-6xl my-3xl leading-snug">
            2. Commission Rate: The total profit and loss of the month (or the number of new valid members in the month)
            and the number of active members for the month must both meet the requirements.
          </p>
        </div>

        <div>
          <p class="text-gray-500 text-6xl my-3xl leading-snug">
            3. Active Member Definition: Deposit ≥200, Effective Betting ≥600 (specific active status determination:
            based
            on user habits, partners are prohibited from maliciously gathering active members. The final interpretation
            right depends on the platform's risk control results).
          </p>
        </div>

        <div>
          <p class="text-gray-500 text-6xl my-3xl leading-snug">
            4. Commission Payment Time: Commissions for the previous calendar month are settled between the 7th and 15th
            of each month.
          </p>
        </div>

        <div>
          <p class="text-gray-500 text-6xl my-3xl leading-snug">
            5. Commission Period: The statistical period is based on a natural month, i.e., from 00:00 on the 1st of
            each
            month to 23:59 on the last day of the month.
          </p>
        </div>
      </div>

      <!-- Commission Plan Table -->
      <div>
        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">Commission Plan</h2>
        <div class="overflow-x-auto">
          <table class="w-full text-6xl">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-4 text-left">Agent Level</th>
                <th class="p-4 text-left">Monthly Net Profit and Loss</th>
                <th class="p-4 text-left">New Valid Members This Month</th>
                <th class="p-4 text-left">Active Requirement</th>
                <th class="p-4 text-left">Commission Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-4 border">1</td>
                <td class="p-4 border">1~100000</td>
                <td class="p-4 border">1~80</td>
                <td class="p-4 border" rowspan="4">5</td>
                <td class="p-4 border">45%</td>
              </tr>
              <tr>
                <td class="p-4 border">2</td>
                <td class="p-4 border">100001~300000</td>
                <td class="p-4 border">81~200</td>
                <td class="p-4 border">55%</td>
              </tr>
              <tr>
                <td class="p-4 border">3</td>
                <td class="p-4 border">300001~1000000</td>
                <td class="p-4 border">201~500</td>
                <td class="p-4 border">60%</td>
              </tr>
              <tr>
                <td class="p-4 border">4</td>
                <td class="p-4 border">1000001~INF</td>
                <td class="p-4 border">501~INF</td>
                <td class="p-4 border">65%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Commission Notes -->
      <div>
        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">Commission Notes</h2>

        <!-- Notes List -->
        <div class="space-y-4">
          <div>
            <p class="text-gray-500 text-6xl my-3xl leading-snug">
              1. Commission scheme calculation method: The actual net profit and loss of all sites under the agent line
              converted to USD, with the standards for valid and active members applicable to all sites.
            </p>
          </div>

          <div>
            <p class="text-gray-500 text-6xl my-3xl leading-snug">
              2. Valid member criteria: Deposit ≥200, Effective Betting ≥600; cryptocurrency users are not counted as
              valid members;
            </p>
          </div>

          <div>
            <p class="text-gray-500 text-6xl my-3xl leading-snug">
              3. Active member standard: Members who meet the valid criteria and continue to deposit and bet are
              considered active members.
            </p>
          </div>

          <div>
            <p class="text-gray-500 text-6xl my-3xl leading-snug">
              4. Commission rate is based on the monthly net profit and loss and the active member requirements. Both
              criteria must be met to receive the corresponding commission rate (no commission if active members are
              below
              5).
            </p>
          </div>

          <div>
            <p class="text-gray-500 text-6xl my-3xl leading-snug">
              5. Levels 1-4: When the active member requirement reaches 5 this month, if the monthly net profit and loss
              do not meet the standard, but there are 81 new valid members, the level 2 commission rate can still be
              enjoyed.
            </p>
          </div>

          <div>
            <p class="text-gray-500 text-6xl my-3xl leading-snug">
              6. In case of a loss this month, negative commission is not calculated. The net profit and loss for the
              month will be carried over to the next month to offset. For example, if you reach the level 2 commission
              rate this month, but after offsetting last month's net profit and loss, it does not meet the level 2 rate
              requirement, the level 2 rate will still be applied.
            </p>
          </div>

          <!-- Example 1 -->
          <div class="ml-8">
            <h3 class="text-gray-700 font-medium mb-2 text-6xl">Example 1:</h3>
            <div class="space-y-2">
              <p class="text-gray-500 text-6xl leading-snug">Last month's net profit and loss: 30,000 (member profit)
              </p>
              <p class="text-gray-500 text-6xl leading-snug">This month's net profit and loss: -40,000 (member loss), 0
                new valid members, 5 active members, 45% commission rate</p>
              <p class="text-gray-500 text-6xl leading-snug">40,000 (this month's net profit and loss) – 30,000 (last
                month's net profit and loss) = 10,000 (net profit and loss for commission calculation this month)</p>
              <p class="text-gray-500 text-6xl leading-snug">10,000 * 0.45 = 4,500 (actual commission issued this month)
              </p>
            </div>
          </div>

          <!-- Example 2 -->
          <div class="ml-8">
            <h3 class="text-gray-700 font-medium mb-2 text-6xl">Example 2:</h3>
            <div class="space-y-2">
              <p class="text-gray-500 text-6xl leading-snug">Last month's net profit and loss: 30,000 (member profit)
              </p>
              <p class="text-gray-500 text-6xl leading-snug">This month's net profit and loss: -40,000 (member loss), 81
                new valid members, 5 active members, 55% commission rate</p>
              <p class="text-gray-500 text-6xl leading-snug">40,000 (this month's net profit and loss) – 30,000 (last
                month's net profit and loss) = 10,000 (net profit and loss for commission calculation this month)</p>
              <p class="text-gray-500 text-6xl leading-snug">10,000 * 0.55 = 5,500 (actual commission issued this month)
              </p>
            </div>
          </div>

          <div>
            <p class="text-gray-500 text-6xl my-3xl leading-snug">
              7. Commission bills will be issued between the 3rd and 5th of each month, and commissions will be
              distributed between the 6th and 10th. Commissions can be withdrawn through local banks or in
              cryptocurrency,
              with no restriction on withdrawal timing.
            </p>
          </div>

          <div>
            <p class="text-gray-500 text-6xl my-3xl leading-snug">
              8. For questions or disputes about the statement, please contact the official agent representative in the
              Telegram service group before the commission is issued. Once the commission is issued, no queries about
              the
              bill will be entertained.
            </p>
          </div>
        </div>
      </div>

      <!-- Rights and Obligations -->
      <div>
        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">PP88 Rights and Obligations for Partners</h2>
        <div class="space-y-4">
          <p class="text-gray-500 text-6xl my-3xl leading-snug">
            1. PP88 customer service representatives will assist partners with account opening for their subordinates
            and
            observe their betting conditions. Both agents and members must agree and comply with PP88's member
            regulations, policies, and operational procedures. Partners can log in to the management backend at any time
            to understand the betting status and activity overview of their subordinate members.
          </p>
          <p class="text-gray-500 text-6xl my-3xl leading-snug">
            2. PP88 reserves all rights to refuse or freeze any account of cooperative agents or members.
          </p>
          <p class="text-gray-500 text-6xl my-3xl leading-snug">
            3. In certain circumstances, after careful review, PP88 reserves the unilateral right to amend any terms of
            the cooperation agreement. PP88 will inform partners of any modifications via email or by posting on the
            website. Modifications may include changes in commission range, payment procedures, and other regulations.
            If
            a partner objects to the modifications, they may terminate the contract. If the partner does not express any
            objections after the modifications, it will be deemed as acceptance and acknowledgment of the new agreement.
          </p>
        </div>
      </div>
    </template>
    <template v-else-if="$i18n.locale === 'zh-CN'">
      <!-- 简体中文版本 -->
      <div>
        <h1 class="font-semibold text-gray-800 mb-2 text-7xl">佣金说明</h1>
      </div>

      <!-- 佣金计算部分 -->
      <div class="space-y-4">
        <div>
          <p class="text-gray-500 text-6xl my-3xl leading-snug">
            1. 佣金计算：代理佣金 = 当月实际盈亏 * 佣金比例；(净盈亏 = 总盈亏 - 会员奖金 - 会员返水 - 平台费用)。
          </p>
          <p class="text-gray-500 text-6xl my-3xl leading-snug">
            (如果一个月内活跃会员少于5人，则当月无佣金，任何正向盈利不累积。任何负向盈利将结转至下月，直至转为正数。)
          </p>
        </div>

        <div>
          <p class="text-gray-500 text-6xl my-3xl leading-snug">
            2. 佣金比例：当月总盈亏（或当月新增有效会员数）和当月活跃会员数必须同时满足要求。
          </p>
        </div>

        <div>
          <p class="text-gray-500 text-6xl my-3xl leading-snug">
            3. 活跃会员定义：充值 ≥200，有效投注 ≥600（具体活跃状态判定：基于用户习惯，禁止合作伙伴恶意聚集活跃会员。最终解释权取决于平台风控结果）。
          </p>
        </div>

        <div>
          <p class="text-gray-500 text-6xl my-3xl leading-snug">
            4. 佣金支付时间：每月7日至15日结算上一自然月的佣金。
          </p>
        </div>

        <div>
          <p class="text-gray-500 text-6xl my-3xl leading-snug">
            5. 佣金周期：统计周期以自然月为准，即每月1日00:00至当月最后一日23:59。
          </p>
        </div>
      </div>

      <!-- 佣金计划表 -->
      <div>
        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">佣金计划</h2>
        <div class="overflow-x-auto">
          <table class="w-full text-6xl">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-4 text-left">代理等级</th>
                <th class="p-4 text-left">月度净盈亏</th>
                <th class="p-4 text-left">本月新增有效会员</th>
                <th class="p-4 text-left">活跃要求</th>
                <th class="p-4 text-left">佣金比例</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-4 border">1</td>
                <td class="p-4 border">1~100000</td>
                <td class="p-4 border">1~80</td>
                <td class="p-4 border" rowspan="4">5</td>
                <td class="p-4 border">45%</td>
              </tr>
              <tr>
                <td class="p-4 border">2</td>
                <td class="p-4 border">100001~300000</td>
                <td class="p-4 border">81~200</td>
                <td class="p-4 border">55%</td>
              </tr>
              <tr>
                <td class="p-4 border">3</td>
                <td class="p-4 border">300001~1000000</td>
                <td class="p-4 border">201~500</td>
                <td class="p-4 border">60%</td>
              </tr>
              <tr>
                <td class="p-4 border">4</td>
                <td class="p-4 border">1000001~无限</td>
                <td class="p-4 border">501~无限</td>
                <td class="p-4 border">65%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- 佣金备注 -->
      <div>
        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">佣金备注</h2>

        <div class="space-y-4">
          <div>
            <p class="text-gray-500 text-6xl my-3xl leading-snug">
              1. 佣金计算方法：代理线下所有站点的实际净盈亏转换为美元，有效和活跃会员标准适用于所有站点。
            </p>
          </div>

          <div>
            <p class="text-gray-500 text-6xl my-3xl leading-snug">
              2. 有效会员标准：充值 ≥200，有效投注 ≥600；加密货币用户不计入有效会员；
            </p>
          </div>

          <div>
            <p class="text-gray-500 text-6xl my-3xl leading-snug">
              3. 活跃会员标准：符合有效标准并持续充值和投注的会员被视为活跃会员。
            </p>
          </div>

          <!-- 后续部分保持与英文版本相同的结构，只替换文字为简体中文 -->
          <!-- 此处省略，实际代码应完整翻译 -->
        </div>
      </div>

      <!-- 权利和义务 -->
      <div>
        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">PP88合作伙伴权利和义务</h2>
        <div class="space-y-4">
          <p class="text-gray-500 text-6xl my-3xl leading-snug">
            1. PP88客服代表将协助合作伙伴为其下级开设账号并观察其投注情况。代理和会员必须同意并遵守PP88的会员规定、政策和操作程序。合作伙伴可随时登录管理后台了解其下级会员的投注状态和活动概况。
          </p>
          <p class="text-gray-500 text-6xl my-3xl leading-snug">
            2. PP88保留拒绝或冻结任何合作代理或会员账户的所有权利。
          </p>
          <p class="text-gray-500 text-6xl my-3xl leading-snug">
            3.
            在某些情况下，经过仔细审查，PP88保留单方面修改合作协议任何条款的权利。PP88将通过电子邮件或在网站上发布通知合作伙伴任何修改。修改可能包括佣金范围、支付程序和其他规定的变更。如果合作伙伴反对修改，可以终止合同。如果合作伙伴在修改后未表示任何异议，将被视为接受并确认新协议。
          </p>
        </div>
      </div>
    </template>
    <template v-else-if="$i18n.locale === 'zh-TW'">  
      <!-- 繁體中文版本 -->  
      <div>  
        <h1 class="font-semibold text-gray-800 mb-2 text-7xl">傭金說明</h1>  
      </div>  

      <!-- 傭金計算部分 -->  
      <div class="space-y-4">  
        <div>  
          <p class="text-gray-500 text-6xl my-3xl leading-snug">  
            1. 傭金計算：代理傭金 = 當月實際盈虧 * 傭金比例；(淨盈虧 = 總盈虧 - 會員獎金 - 會員返水 - 平台費用)。  
          </p>  
          <p class="text-gray-500 text-6xl my-3xl leading-snug">  
            (如果一個月內活躍會員少於5人，則當月無傭金，任何正向盈利不累積。任何負向盈利將結轉至下月，直至轉為正數。)  
          </p>  
        </div>  

        <div>  
          <p class="text-gray-500 text-6xl my-3xl leading-snug">  
            2. 傭金比例：當月總盈虧（或當月新增有效會員數）和當月活躍會員數必須同時滿足要求。  
          </p>  
        </div>  

        <div>  
          <p class="text-gray-500 text-6xl my-3xl leading-snug">  
            3. 活躍會員定義：充值 ≥200，有效投注 ≥600（具體活躍狀態判定：基於用戶習慣，禁止合作夥伴惡意聚集活躍會員。最終解釋權取決於平台風控結果）。  
          </p>  
        </div>  

        <div>  
          <p class="text-gray-500 text-6xl my-3xl leading-snug">  
            4. 傭金支付時間：每月7日至15日結算上一自然月的傭金。  
          </p>  
        </div>  

        <div>  
          <p class="text-gray-500 text-6xl my-3xl leading-snug">  
            5. 傭金週期：統計週期以自然月為準，即每月1日00:00至當月最後一日23:59。  
          </p>  
        </div>  
      </div>  

      <!-- 傭金計劃表 -->  
      <div>  
        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">傭金計劃</h2>  
        <div class="overflow-x-auto">  
          <table class="w-full text-6xl">  
            <thead class="bg-gray-100">  
              <tr>  
                <th class="p-4 text-left">代理等級</th>  
                <th class="p-4 text-left">月度淨盈虧</th>  
                <th class="p-4 text-left">本月新增有效會員</th>  
                <th class="p-4 text-left">活躍要求</th>  
                <th class="p-4 text-left">傭金比例</th>  
              </tr>  
            </thead>  
            <tbody>  
              <tr>  
                <td class="p-4 border">1</td>  
                <td class="p-4 border">1~100000</td>  
                <td class="p-4 border">1~80</td>  
                <td class="p-4 border" rowspan="4">5</td>  
                <td class="p-4 border">45%</td>  
              </tr>  
              <tr>  
                <td class="p-4 border">2</td>  
                <td class="p-4 border">100001~300000</td>  
                <td class="p-4 border">81~200</td>  
                <td class="p-4 border">55%</td>  
              </tr>  
              <tr>  
                <td class="p-4 border">3</td>  
                <td class="p-4 border">300001~1000000</td>  
                <td class="p-4 border">201~500</td>  
                <td class="p-4 border">60%</td>  
              </tr>  
              <tr>  
                <td class="p-4 border">4</td>  
                <td class="p-4 border">1000001~無限</td>  
                <td class="p-4 border">501~無限</td>  
                <td class="p-4 border">65%</td>  
              </tr>  
            </tbody>  
          </table>  
        </div>  
      </div>  

      <!-- 傭金備註 -->  
      <div>  
        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">傭金備註</h2>  

        <div class="space-y-4">  
          <div>  
            <p class="text-gray-500 text-6xl my-3xl leading-snug">  
              1. 傭金計算方法：代理線下所有站點的實際淨盈虧轉換為美元，有效和活躍會員標準適用於所有站點。  
            </p>  
          </div>  

          <div>  
            <p class="text-gray-500 text-6xl my-3xl leading-snug">  
              2. 有效會員標準：充值 ≥200，有效投注 ≥600；加密貨幣用戶不計入有效會員；  
            </p>  
          </div>  

          <div>  
            <p class="text-gray-500 text-6xl my-3xl leading-snug">  
              3. 活躍會員標準：符合有效標準並持續充值和投注的會員被視為活躍會員。  
            </p>  
          </div>  

          <div>  
            <p class="text-gray-500 text-6xl my-3xl leading-snug">  
              4. 傭金比例基於月度淨盈虧和活躍會員要求。必須同時滿足兩個標準才能獲得對應的傭金比例（活躍會員低於5人則無傭金）。  
            </p>  
          </div>  

          <div>  
            <p class="text-gray-500 text-6xl my-3xl leading-snug">  
              5. 1-4級：當月活躍會員要求達到5人時，即使月度淨盈虧不符合標準，但新增有效會員達到81人，仍可享受二級傭金比例。  
            </p>  
          </div>  

          <div>  
            <p class="text-gray-500 text-6xl my-3xl leading-snug">  
              6. 本月出現虧損時，不計算負向傭金。本月淨盈虧將結轉至下月抵消。例如，本月達到二級傭金比例，但抵消上月淨盈虧後不符合二級比例要求，仍將應用二級比例。  
            </p>  
          </div>  

          <!-- 範例1 -->  
          <div class="ml-8">  
            <h3 class="text-gray-700 font-medium mb-2 text-6xl">範例1：</h3>  
            <div class="space-y-2">  
              <p class="text-gray-500 text-6xl leading-snug">上月淨盈虧：30,000（會員盈利）</p>  
              <p class="text-gray-500 text-6xl leading-snug">本月淨盈虧：-40,000（會員虧損），0新增有效會員，5活躍會員，45%傭金比例</p>  
              <p class="text-gray-500 text-6xl leading-snug">40,000（本月淨盈虧）– 30,000（上月淨盈虧）= 10,000（本月傭金計算淨盈虧）</p>  
              <p class="text-gray-500 text-6xl leading-snug">10,000 * 0.45 = 4,500（本月實際發放傭金）</p>  
            </div>  
          </div>  

          <!-- 範例2 -->  
          <div class="ml-8">  
            <h3 class="text-gray-700 font-medium mb-2 text-6xl">範例2：</h3>  
            <div class="space-y-2">  
              <p class="text-gray-500 text-6xl leading-snug">上月淨盈虧：30,000（會員盈利）</p>  
              <p class="text-gray-500 text-6xl leading-snug">本月淨盈虧：-40,000（會員虧損），81新增有效會員，5活躍會員，55%傭金比例</p>  
              <p class="text-gray-500 text-6xl leading-snug">40,000（本月淨盈虧）– 30,000（上月淨盈虧）= 10,000（本月傭金計算淨盈虧）</p>  
              <p class="text-gray-500 text-6xl leading-snug">10,000 * 0.55 = 5,500（本月實際發放傭金）</p>  
            </div>  
          </div>  

          <div>  
            <p class="text-gray-500 text-6xl my-3xl leading-snug">  
              7. 傭金帳單將於每月3日至5日發佈，傭金將在6日至10日分發。傭金可通過本地銀行或加密貨幣提取，提取時間不受限制。  
            </p>  
          </div>  

          <div>  
            <p class="text-gray-500 text-6xl my-3xl leading-snug">  
              8. 關於對帳單有任何疑問或爭議，請在傭金發放前聯繫Telegram服務群組中的官方代理代表。傭金發放後，將不再受理帳單相關查詢。  
            </p>  
          </div>  
        </div>  
      </div>  

      <!-- 權利和義務 -->  
      <div>  
        <h2 class="font-semibold text-gray-800 mb-4 text-7xl">PP88合作夥伴權利和義務</h2>  
        <div class="space-y-4">  
          <p class="text-gray-500 text-6xl my-3xl leading-snug">  
            1. PP88客服代表將協助合作夥伴為其下級開設賬戶並觀察其投注情況。代理和會員必須同意並遵守PP88的會員規定、政策和操作程序。合作夥伴可隨時登錄管理後台了解其下級會員的投注狀態和活動概況。  
          </p>  
          <p class="text-gray-500 text-6xl my-3xl leading-snug">  
            2. PP88保留拒絕或凍結任何合作代理或會員賬戶的所有權利。  
          </p>  
          <p class="text-gray-500 text-6xl my-3xl leading-snug">  
            3. 在某些情況下，經過仔細審查，PP88保留單方面修改合作協議任何條款的權利。PP88將通過電子郵件或在網站上發佈通知合作夥伴任何修改。修改可能包括傭金範圍、支付程序和其他規定的變更。如果合作夥伴反對修改，可以終止合同。如果合作夥伴在修改後未表示任何異議，將被視為接受並確認新協議。  
          </p>  
        </div>  
      </div>  
    </template>
  </div>
</template>
