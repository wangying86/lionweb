<template>
    <div class="hellomelody">
        <h3 @click="getJson">第{{$route.params.lesson}}册</h3>
        <el-collapse v-model="activeNames" @change="handleChange">
            <div v-for='(item, index) in lesson'>
                <el-collapse-item :title='item.name' :name='item.name'>
                    <div v-for='(f_item,f_index) in item.lessonfile'>
                        <div>
                            <router-link :to="{name:'lessonvideo',params:{path:f_item.CoursewareUrl}}">{{f_item.CoursewareName}}</router-link>
                        </div>
                    </div>
                </el-collapse-item>
            </div>
        </el-collapse>
    </div>
</template>
<script>
// @ is an alias to /src


export default {
    name: 'hellomelody',
    components: {

    },
    data() {
        return {
            lesson: [],
            activeNames: ''
        }

    },
    created() {
        this.getJson();
    },
    methods: {
        //获取课程数据
        getJson() {
            this.$axios({
                    url: '/lion/data/'+this.$route.params.name + this.$route.params.lesson + '.json'//发布到github需要修改的地址
                    // url: '/data/' + this.$route.params.name + this.$route.params.lesson + '.json' //本地测试地址

                })
                .then(response => {
                    let data = response.data.Result;
                    this.lesson = [];

                    //遍历获取课件目录及链接地址
                    data.forEach((d_value, d_index, d_arr) => {
                        let jieandfile = []; //得到课件地址数组
                        if (typeof d_value.JieAndFile != "undefined") {
                            d_value.JieAndFile.forEach((j_value, j_index, j_arr) => {
                                if (typeof j_value.CoursewareUrl != "undefined") {
                                    jieandfile.push(j_value)
                                }
                            });
                            this.lesson.push({ "name": d_value.Zhang, "lessonfile": jieandfile });
                        }

                        


                    });
                }).catch((e) => { console.log(e) })

        },
        handleChange(val) {
            // console.log(val);
        }
    },
    watch: {
        '$route.path': function(val, oldVal) {
            this.getJson();
        }
    }
}
</script>