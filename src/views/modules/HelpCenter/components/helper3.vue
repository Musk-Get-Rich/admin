<template>
  <div class="mx-auto px-20 py-6 space-y-8">
    <!-- Title Section -->
    <div>
      <h1 class="font-semibold text-gray-800 mb-2 text-7xl">Commission Explanation</h1>
    </div>

    <!-- Commission Calculation Section -->
    <div class="space-y-4">
      <div>
        <p class="text-gray-500 text-6xl my-3xl leading-snug">
          1. Commission Calculation: Agent Commission = Actual Profit and Loss of the Month * Commission Rate; (Net Profit and Loss = Total Profit and Loss - Member Bonuses - Member Rebates - Platform Fees).
        </p>
        <p class="text-gray-500 text-6xl my-3xl leading-snug">
          (If there are fewer than 5 active members in a month, there will be no commission for that month, and any positive profit generated will not be accumulated. Any negative profit will be carried over to the next month until it turns positive.)
        </p>
      </div>

      <div>
        <p class="text-gray-500 text-6xl my-3xl leading-snug">
          2. Commission Rate: The total profit and loss of the month (or the number of new valid members in the month) and the number of active members for the month must both meet the requirements.
        </p>
      </div>

      <div>
        <p class="text-gray-500 text-6xl my-3xl leading-snug">
          3. Active Member Definition: Deposit ≥200, Effective Betting ≥600 (specific active status determination: based on user habits, partners are prohibited from maliciously gathering active members. The final interpretation right depends on the platform's risk control results).
        </p>
      </div>

      <div>
        <p class="text-gray-500 text-6xl my-3xl leading-snug">
          4. Commission Payment Time: Commissions for the previous calendar month are settled between the 7th and 15th of each month.
        </p>
      </div>

      <div>
        <p class="text-gray-500 text-6xl my-3xl leading-snug">
          5. Commission Period: The statistical period is based on a natural month, i.e., from 00:00 on the 1st of each month to 23:59 on the last day of the month.
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
            1. Commission scheme calculation method: The actual net profit and loss of all sites under the agent line converted to USD, with the standards for valid and active members applicable to all sites.
          </p>
        </div>

        <div>
          <p class="text-gray-500 text-6xl my-3xl leading-snug">
            2. Valid member criteria: Deposit ≥200, Effective Betting ≥600; cryptocurrency users are not counted as valid members;
          </p>
        </div>

        <div>
          <p class="text-gray-500 text-6xl my-3xl leading-snug">
            3. Active member standard: Members who meet the valid criteria and continue to deposit and bet are considered active members.
          </p>
        </div>

        <div>
          <p class="text-gray-500 text-6xl my-3xl leading-snug">
            4. Commission rate is based on the monthly net profit and loss and the active member requirements. Both criteria must be met to receive the corresponding commission rate (no commission if active members are below 5).
          </p>
        </div>

        <div>
          <p class="text-gray-500 text-6xl my-3xl leading-snug">
            5. Levels 1-4: When the active member requirement reaches 5 this month, if the monthly net profit and loss do not meet the standard, but there are 81 new valid members, the level 2 commission rate can still be enjoyed.
          </p>
        </div>

        <div>
          <p class="text-gray-500 text-6xl my-3xl leading-snug">
            6. In case of a loss this month, negative commission is not calculated. The net profit and loss for the month will be carried over to the next month to offset. For example, if you reach the level 2 commission rate this month, but after offsetting last month's net profit and loss, it does not meet the level 2 rate requirement, the level 2 rate will still be applied.
          </p>
        </div>

        <!-- Example 1 -->
        <div class="ml-8">
          <h3 class="text-gray-700 font-medium mb-2 text-6xl">Example 1:</h3>
          <div class="space-y-2">
            <p class="text-gray-500 text-6xl leading-snug">Last month's net profit and loss: 30,000 (member profit)</p>
            <p class="text-gray-500 text-6xl leading-snug">This month's net profit and loss: -40,000 (member loss), 0 new valid members, 5 active members, 45% commission rate</p>
            <p class="text-gray-500 text-6xl leading-snug">40,000 (this month's net profit and loss) – 30,000 (last month's net profit and loss) = 10,000 (net profit and loss for commission calculation this month)</p>
            <p class="text-gray-500 text-6xl leading-snug">10,000 * 0.45 = 4,500 (actual commission issued this month)</p>
          </div>
        </div>

        <!-- Example 2 -->
        <div class="ml-8">
          <h3 class="text-gray-700 font-medium mb-2 text-6xl">Example 2:</h3>
          <div class="space-y-2">
            <p class="text-gray-500 text-6xl leading-snug">Last month's net profit and loss: 30,000 (member profit)</p>
            <p class="text-gray-500 text-6xl leading-snug">This month's net profit and loss: -40,000 (member loss), 81 new valid members, 5 active members, 55% commission rate</p>
            <p class="text-gray-500 text-6xl leading-snug">40,000 (this month's net profit and loss) – 30,000 (last month's net profit and loss) = 10,000 (net profit and loss for commission calculation this month)</p>
            <p class="text-gray-500 text-6xl leading-snug">10,000 * 0.55 = 5,500 (actual commission issued this month)</p>
          </div>
        </div>

        <div>
          <p class="text-gray-500 text-6xl my-3xl leading-snug">
            7. Commission bills will be issued between the 3rd and 5th of each month, and commissions will be distributed between the 6th and 10th. Commissions can be withdrawn through local banks or in cryptocurrency, with no restriction on withdrawal timing.
          </p>
        </div>

        <div>
          <p class="text-gray-500 text-6xl my-3xl leading-snug">
            8. For questions or disputes about the statement, please contact the official agent representative in the Telegram service group before the commission is issued. Once the commission is issued, no queries about the bill will be entertained.
          </p>
        </div>
      </div>
    </div>

    <!-- Rights and Obligations -->
    <div>
      <h2 class="font-semibold text-gray-800 mb-4 text-7xl">PP88 Rights and Obligations for Partners</h2>
      <div class="space-y-4">
        <p class="text-gray-500 text-6xl my-3xl leading-snug">
          1. PP88 customer service representatives will assist partners with account opening for their subordinates and observe their betting conditions. Both agents and members must agree and comply with PP88's member regulations, policies, and operational procedures. Partners can log in to the management backend at any time to understand the betting status and activity overview of their subordinate members.
        </p>
        <p class="text-gray-500 text-6xl my-3xl leading-snug">
          2. PP88 reserves all rights to refuse or freeze any account of cooperative agents or members.
        </p>
        <p class="text-gray-500 text-6xl my-3xl leading-snug">
          3. In certain circumstances, after careful review, PP88 reserves the unilateral right to amend any terms of the cooperation agreement. PP88 will inform partners of any modifications via email or by posting on the website. Modifications may include changes in commission range, payment procedures, and other regulations. If a partner objects to the modifications, they may terminate the contract. If the partner does not express any objections after the modifications, it will be deemed as acceptance and acknowledgment of the new agreement.
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>
