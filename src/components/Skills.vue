<template>
    <div class="skills-wrapper">
        <h2 id="skills">Skills</h2>
        <div class='skills-boxes'>
            <div class='skills-box'>
                <h3>言語</h3>
                <table>
                    <tbody>
                        <tr>
                            <th>C</th>
                            <td>2年</td>
                            <td>★☆☆</td>
                        </tr>
                        <tr>
                            <th>Java</th>
                            <td>2年</td>
                            <td>★☆☆</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class='skills-box'>
                <h3>フレームワーク</h3>
            </div>
            <div class='skills-box'>
                <h3>クラウド</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Skills',
  data () {
    return {
    }
  }
}
</script>

<style>
.skills-wrapper {
    margin-top: 24px;
    padding-top: 24px;
    padding-bottom: 28px;
    border-top: 2px solid gray;
    border-bottom: 2px solid gray;
}
.skills-boxes {
    display: block;
    height: 90%;
    justify-content: space-around;
}
.skills-box {
    display: block;
    height: 90%;
    padding: 8px 5%;
    align-items: center;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}
@media screen and (min-width: 740px) {
    .skills-boxes {
        display: flex;
        height: 100%;
    }
    .skills-box {
        display: inline-block;
        width: 20%;
    }
    .skills-wrapper {
        height: 500px;
    }
    .skills-wrapper{
        border: none;
    }
}
.skills-box h3{
    border-bottom: 1px solid gray;
}
table {
    width: 100%;
    font-size: small;
    border-collapse: collapse;
}
td {
    border-bottom: solid 1px #cccccc;
}
th {
    border-bottom: solid 1px #cccccc;
}
</style>
