<template>
    <div class="certifications-wrapper">
        <h2 id="certifications">Certifications</h2>
            <div class='certifications-area'>
                <table class='certifications-table'>
                    <tbody>
                            <tr v-for="(item, key) of items" :key="key" >
                                <td class='certifications-li'>{{ item.year}}</td>
                                <td class='certifications-li'>{{ item.name }}</td>
                            </tr>
                    </tbody>
                </table>
            </div>
    </div>
</template>

<script>
export default {
  name: 'Certifications',
  data () {
    return {
      items: [
        { year: '2007年', name: '暗算検定 準1級' },
        { year: '2007年', name: '珠算検定 1級' },
        { year: '2010年', name: '漢字能力検定 準2級' },
        { year: '2016年', name: '秘書技能検定 3級' },
        { year: '2019年', name: 'TOEIC 790' }
      ]
    }
  }
}
</script>

<style>
.certifications-wrapper {
    margin-top: 24px;
}
.certifications-area {
    padding: 4% 20%;
    text-align: center;
    align-items: center;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}
.certifications-table {
}
.certifications-li {
    border-bottom: solid 1px #cccccc;
}
</style>
