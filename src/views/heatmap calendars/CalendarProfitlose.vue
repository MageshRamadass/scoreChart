<template>
    <div>
        <calendar-heatmap
        style="font-family: 'DM Sans', sans-serif !important;"
        :values="[
        { date: '', count: 3 },
        { date: '2018-1-31', count: 1 },
        { date: '2018-2-28', count: 2 },
        { date: '2018-3-31', count: 2 },
        { date: '2018-4-30', count: 2 },
        { date: '2018-5-31', count: 1 },
        { date: '2018-6-30', count: 2 },
        { date: '2018-12-31', count: 1 },
        { date: '2018-11-28', count: 2 },
        { date: '2018-10-31', count: 1 },
        { date: '2018-9-30', count: 2 },
        { date: '2018-8-31', count: 1 },
        { date: '2018-7-30', count: 1 },
        { date: '2018-1-25', count: 1 },
        { date: '2018-2-14', count: 2 },
        { date: '2018-3-22', count: 2 },
        { date: '2018-4-2', count: 2 },
        { date: '2018-5-7', count: 1 },
        { date: '2018-6-5', count: 2 },
        { date: '2018-12-13', count: 1 },
        { date: '2018-11-10', count: 2 },
        { date: '2018-10-24', count: 1 },
        { date: '2018-9-20', count: 2 },
        { date: '2018-8-19', count: 1 },
        { date: '2018-7-31', count: 1 },
        { date: '2018-3-31', count: 1 },
        { date: '2018-4-28', count: 2 },
        { date: '2018-5-31', count: 2 },
        { date: '2018-6-30', count: 2 },
        { date: '2018-7-31', count: 1 },
        { date: '2018-8-30', count: 2 },
        { date: '2018-9-26', count: 1 },
        { date: '2018-10-28', count: 2 },
        { date: '2018-11-21', count: 1 },
        { date: '2018-12-30', count: 2 },
        { date: '2018-1-31', count: 1 },
        { date: '2018-2-30', count: 1 },
        { date: '2018-3-25', count: 1 },
        { date: '2018-4-14', count: 2 },
        { date: '2018-5-22', count: 2 },
        { date: '2018-6-2', count: 2 },
        { date: '2018-7-7', count: 1 },
        { date: '2018-8-5', count: 2 },
        { date: '2018-9-13', count: 1 },
        { date: '2018-10-10', count: 2 },
        { date: '2018-12-24', count: 1 },
        { date: '2018-11-20', count: 2 },
        { date: '2018-12-19', count: 1 },
        { date: '2018-2-31', count: 1 },]" :start-date="2018 - 1 - 1" end-date="2019-1-1"
            :range-color="['#E8EBED', '#e126269a', '#34A8539a']" :vertical="false" tooltip-unit="Profit & Loss" />
    </div>
</template>

<script>
import { CalendarHeatmap } from 'vue-calendar-heatmap'

export default {

    components: {
        CalendarHeatmap
    },

}
</script>