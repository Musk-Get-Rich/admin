<template>
  <div class="mx-auto px-20 py-6 space-y-8">
    <!-- Title and Introduction -->
    <div>
      <p class="text-gray-500 text-6xl my-3xl leading-snug">
        Gift Bonus Explanation
      </p>
      <p class="text-red text-6xl my-3xl leading-snug">
        Gift Bonus Balance – Gift bonus amount is distributed based on the number of valid members under the agent in the previous month. It can only be used for activities and cannot be used for illegal withdrawals.
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
          ①Virtual currency users need to deposit a certain number of times before they can gift a bonus (there is no standard for the number of deposits; the system will detect if there is any abnormal behavior by members to decide whether to start the gift bonus earlier or later).
        </p>
        <p class="text-gray-500 text-6xl leading-snug">
          ②Users who have not bound withdrawal information can gift a bonus. The maximum gift bonus limit (in local currency) is:
        </p>
        <div class="ml-8 text-gray-500 text-6xl">
          <p>Hong Kong: 200</p>
          <p>Malaysia: 88</p>
          <p>Vietnam: 200</p>
        </div>
        <p class="text-red text-6xl">Note: Users with overlapping devices are not allowed to gift.</p>
        <p class="text-gray-500 text-6xl leading-snug">
          ③For users who have bound withdrawal information but have not made deposits, the maximum gift bonus limit (in local currency) is:
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
          ④For users who have bound withdrawal information and have made deposits, the maximum gift bonus limit (in local currency) is:
        </p>
        <div class="ml-8 text-gray-500 text-6xl">
          <p>Hong Kong: 588</p>
          <p>Malaysia: 188</p>
          <p>Vietnam: 588</p>
        </div>
        <p class="text-gray-500 text-6xl leading-snug">⑤Active Users:</p>
        <p class="text-gray-500 text-6xl leading-snug">
          A. Active users whose effective betting amount is less than three times the deposit amount cannot gift the bonus (this does not affect users above VIP3 and users of the Hong Kong site).
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
        2. The unit of the gift bonus is USD, and the amount gifted is converted into the currency of the member's region based on the international exchange rate of the day.
      </h2>

      <h2 class="font-semibold text-gray-800 mb-4 text-7xl">
        3. Monthly bonuses are issued based on the number of active members from the previous month. The bonuses do not accumulate and are reset at the end of each month. The issuance standards are as follows:
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
        5. Agents cannot apply for more gift bonus amount once used up; they can only wait for the next month's distribution based on the number of valid members, distributed on the 1st of every month.
      </h2>

      <h2 class="font-semibold text-gray-800 mb-4 text-7xl">
        6. Agents gifting the bonus can freely adjust the multiplier for wagering requirements; if not set, the default is 1x.
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
        Note: Members who reach the gift limit can increase their limit through natural upgrading. The limit cannot be gifted again in the same month once reached, and the marketing department will close applications for proxy gifting.
      </p>
    </div>

    <!-- How to Gift Bonus -->
    <div>
      <h2 class="font-semibold text-gray-800 mb-4 text-7xl">How to Gift Bonus</h2>
      <p class="text-gray-500 text-6xl leading-snug">
        Log in to the agent backend – Member Management – Operation – Gift Bonus.
      </p>
      <p class="text-gray-500 text-6xl leading-snug">
        Please set a payment password before gifting the bonus. Steps to set a payment password: Agent backend – Personal Profile – Security Information – Set Payment Password.
      </p>
      <p class="text-red text-6xl italic">
        (If you cannot set the payment password yourself, please contact group customer service or online customer service for assistance)
      </p>
    </div>

    <!-- Common Questions -->
    <div>
      <h2 class="font-semibold text-gray-800 mb-4 text-7xl">Common Questions about Bonus Gifting</h2>
      <div class="space-y-4">
        <div>
          <p class="text-gray-500 text-6xl font-medium">1. Can the monthly bonus be carried over to the next month?</p>
          <p class="text-gray-500 text-6xl leading-snug">
            The bonus is reset to zero in the last 12 hours of the last day of each month and does not carry over to the next month.
          </p>
        </div>

        <div>
          <p class="text-gray-500 text-6xl font-medium">2. Where can I view my bonus gifting records?</p>
          <p class="text-gray-500 text-6xl leading-snug">
            Answer: Go to Withdrawal and Deposit Records – Select 'Agent Bonus' under All Types – Choose the date and click search to view the bonus gifting records.
          </p>
        </div>

        <div>
          <p class="text-gray-500 text-6xl font-medium">3. How is the gifting limit for individual members handled?</p>
          <p class="text-gray-500 text-6xl leading-snug">
            Answer: Members who reach the gifting limit can increase their limit through natural upgrading. The limit cannot be gifted again in the same month.
          </p>
        </div>

        <div>
          <p class="text-gray-500 text-6xl font-medium">4. How does a member claim a gifted bonus?</p>
          <p class="text-gray-500 text-6xl leading-snug">
            After successful gifting, members need to log in to the APP and claim it in the red packet floating window on the homepage.
          </p>
          <p class="text-red text-6xl">Note: For the first claim, a deposit is required before claiming, with no restriction on the deposit amount.</p>
        </div>

        <div>
          <p class="text-gray-500 text-6xl font-medium">5. What to do if the gifting is wrong?</p>
          <p class="text-gray-500 text-6xl leading-snug">
            If there is a mistake in gifting, please contact customer service immediately to check if the bet has been placed. Bonuses that have been wagered cannot be deducted; bonuses not yet claimed cannot be deducted and must be claimed by the member before deduction. Please carefully check the account and amount before gifting.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>
