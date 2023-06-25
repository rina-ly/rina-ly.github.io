<template>
    <div class="profile-wrapper">
        <h2 id="profile">Profile</h2>
        <div class='profile-area'>
            <img :src='logo' :class="'profile-img'" />
            <p class="name">Rina Yamaguchi</p>
            <p class="description">Engineer</p>
            <div class='sns-icons'>
                <a v-for="(snsIcon, index) in snsIcons" :key=index :href='snsIcon.path' class="sns-link" target='_blank' rel='noopener'>
                        <img :src='snsIcon.logo' class="sns-img" />
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      logo: require('@/assets/rina-ly.png'),
      snsIcons: [
        { logo: require('@/assets/github.png'), path: 'https://github.com/rina-ly' },
        { logo: require('@/assets/pen.png'), path: 'https://qiita.com/rina-ly' },
        { logo: require('@/assets/twitter.png'), path: 'https://twitter.com/rinaly28' },
        { logo: require('@/assets/mail.png'), path: 'mailto:rina.ly.2307@gmail.com' }
      ]
    }
  }
}
</script>

<style>
.profile-wrapper {
    margin-top: 24px;
}
.profile-area {
    padding: 4% 20%;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}
.profile-img {
    width: 100%;
    max-width: 250px;
    border-radius: 80%;
    display: inline-block;
    align-items: center;
    margin-top: 24px;
}
.name {
    font-weight: bold;
    font-size: x-large;
}
.sns-icons {
    display: flex;
    height: 50px;
    justify-content: center;
}
.sns-link {
    margin-left: 8px;
    align-items: center;
}
.sns-img {
    width: 100%;
    max-width: 50px;
}
</style>
