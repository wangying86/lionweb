<template>
    <div class="hellomelody">
        <h1 @click="getJson">第{{$route.params.lesson}}册</h1>
        <el-collapse v-model="activeNames" @change="handleChange">
            <div v-for='(item,index) in data'>
                <el-collapse-item :title='item.Zhang' :name='item.Zhang'>
                	<div v-for='(f_item,file) in item.JieAndFile'>
                    	<div> <el-link type="info" :href='"http://elearning.shuangmeimelody.com/web/admin/UploadFiles/"+f_item.CoursewareUrl'>{{f_item.CoursewareName}}</el-link></div>
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
            data: '',
            activeNames: ''
        }

    },
    created() {
        this.getJson();
    },
    methods: {
        //获取课程数据
        getJson() {
            // this.url = "/data/"+this.$route.params.name + this.$route.params.lesson + '.json';
            this.$axios({
                    // url: '/lion/data/'+this.$route.params.name + this.$route.params.lesson + '.json'//发布到github需要修改的地址
                    url: '/data/'+this.$route.params.name + this.$route.params.lesson + '.json'//发布到github需要修改的地址

                })
                .then(response => {
                    this.data = response.data.Result;
                     console.log(this.url);
                    // console.log(this.lesson);
                }).catch((e) => { console.log(e) })

        },
        handleChange(val) {
            // console.log(val);
        }
    },
    watch:{
    	// this.getJson()
    	'$route.path':function(val, oldVal){
    		this.getJson();
    	}
    }
}
</script>