<template>
    <div>
        <calendar-heatmap style="font-family: 'DM Sans', sans-serif !important;"
            :values="[{ date: '2018-1-31', count: 1.0 }, { date: '2018-2-28', count: 2.9 }, { date: '2018-3-31', count: 4.3 }, { date: '2018-4-30', count: 2.1 }, { date: '2018-5-31', count: 7.2 }, { date: '2018-6-30', count: 3 },
            { date: '2018-12-31', count: 1.0 }, { date: '2018-11-28', count: 2.9 }, { date: '2018-10-31', count: 4.3 }, { date: '2018-9-30', count: 2.1 }, { date: '2018-8-31', count: 7.2 }, { date: '2018-7-30', count: 3 }]"
            :start-date="2018-1-1" end-date="2019-1-1"
            :range-color="['#E8EBED', '#c453f1', '#8253f1', '#5398f1', '#1877F2']" :vertical="false"
            tooltip-unit="Hours active" />
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