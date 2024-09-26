<script setup>
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

let data = ref([]);

const list = [
  {
    title: "Today",
    component: resolveComponent("TabsToday"),
  },
  {
    title: "Week",
    component: resolveComponent("TabsWeek"),
  },
  {
    title: "Month",
    component: resolveComponent("TabsMonth"),
  },
  {
    title: "Year",
    component: resolveComponent("TabsYear"),
  },
];

const cards = [
  {
    title: "Sales",
    progression: 12,
    amount: 1244.43,
    label: "View sales",
    description: "Sales of March 2025",
    icon: "solar:ticket-sale-outline",
  },
  {
    title: "Refunds",
    progression: 8,
    amount: 84.44,
    label: "View refunds",
    description: "Refunds since beginning of year",
    icon: "heroicons-outline:receipt-refund",
  },
  {
    title: "Payouts",
    progression: 14,
    amount: 899.99,
    label: "View payouts",
    description: "Payouts of this week",
    icon: "tabler:zoom-money",
  },
];



let currentCategory = ref("today");

function generateRandomValue(number = 7) {
  let values = [];
  for (let i = 0; i < number; i++) {
    values.push(Math.floor(Math.random() * 100));
  }
  data.value = values;
  return values;
}

const setCategory = (e) => {
  let v = e.target.innerText.toLowerCase();
  console.log(v);
  currentCategory.value = v;

  switch (v) {
    case "today":
      generateRandomValue(24);
      break;
    case "week":
      generateRandomValue(7);
      break;
    case "month":
      generateRandomValue(31);
      break;
    case "year":
      generateRandomValue(12);
      break;
    default:
      generateRandomValue(24);
      break;
  }
};

onMounted(() => {
  generateRandomValue(24);
});

</script>

<template>
  <div class="grid gap-4 w-full">
    <header class="flex item-start justify-between">
      <div class="grow">
        <p>Hi, welcome back Guilherme!</p>
        <h1>Dashboard</h1>
      </div>
      <div class="w-[120px] bg-neutral-200 h-[36px]"></div>
    </header>
    <main class="grid gap-4">
      <Tabs default-value="Today" @click="setCategory">
        <TabsList class="max-w-[400px]">
          <TabsTrigger
            v-for="(item, index) in list"
            :key="index"
            :value="item.title"
          >
            {{ item.title }}
          </TabsTrigger>
        </TabsList>
        <TabsContent
          v-for="(item, index) in list"
          :key="index"
          :value="item.title"
        >
          <Chart v-if="data.length > 0" :currentCategory :data="data"/>
        </TabsContent>
      </Tabs>
    </main>
    <footer>
      <div class="grid lg:grid-cols-3 gap-4">
        <Card
          v-for="(item, index) in cards"
          :key="index"
          :card="item"
        ></Card>
      </div>
    </footer>
  </div>
</template>
