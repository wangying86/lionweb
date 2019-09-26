<template>
    <div id="lessonvideo">
        <video-player class="vjs-custom-skin" ref="videoPlayer" :options="playerOptions" :playsinline="true" @play="onPlayerPlay($event)" @pause="onPlayerPause($event)" @ended="onPlayerEnded($event)" @loadeddata="onPlayerLoadeddata($event)" @waiting="onPlayerWaiting($event)" @playing="onPlayerPlaying($event)" @timeupdate="onPlayerTimeupdate($event)" @canplay="onPlayerCanplay($event)" @canplaythrough="onPlayerCanplaythrough($event)" @ready="playerReadied" @statechanged="playerStateChanged($event)">
        </video-player>
    </div>
</template>
<script>

export default {
    name: 'lessonvideo',
    components: {},
    data() {
        return {
            msg: '视频播放', // 视频播放
            // videojs options
            playerOptions: {
                // height: '360',
                autoplay: true,
                language: 'zh-CN',
                muted: false, // 默认情况下将会消除任何音频。
                loop: false, // 导致视频一结束就重新开始。
                playbackRates: [0.7, 1.0, 1.5, 2.0],
                aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        		fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                sources: [{
                    type: "video/mp4",
                    // mp4
                    src: "http://elearning.shuangmeimelody.com/web/admin/UploadFiles/"+this.$route.params.path,
                    // webm
                    // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
                }],
                poster: "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg",
                notSupportedMessage: '此视频暂无法播放，请稍后再试' //允许覆盖Video.js无法播放媒体源时显示的默认信息。
            }
        }
    },
    mounted() {
      // console.log('this is current player instance object', this.player)
      setTimeout(() => {
        console.log('dynamic change options', this.player)
        this.player.muted(false)
      }, 5000)
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    methods: {
      // listen event
      onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      onPlayerEnded(player) {
        // console.log('player ended!', player)
      },
      onPlayerLoadeddata(player) {
        // console.log('player Loadeddata!', player)
      },
      onPlayerWaiting(player) {
        // console.log('player Waiting!', player)
      },
      onPlayerPlaying(player) {
        // console.log('player Playing!', player)
      },
      onPlayerTimeupdate(player) {
        // console.log('player Timeupdate!', player.currentTime())
      },
      onPlayerCanplay(player) {
        // console.log('player Canplay!', player)
      },
      onPlayerCanplaythrough(player) {
        // console.log('player Canplaythrough!', player)
      },
      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },
      // player is ready
      playerReadied(player) {
        // seek to 10s
        console.log('example player 1 readied', player)
        player.currentTime(10)
        // console.log('example 01: the player is readied', player)
      }
    }
  }
</script>