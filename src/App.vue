<template>
    <div id="app">
        <el-container>
            <el-header class="grid-content">
                <el-menu :default-active="activeIndex" class="el-menu-demo " mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1">
                        <router-link to="/">首页</router-link>
                    </el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">美乐蒂</template>
                        <div v-for='(item,index) in item'>
                            <el-menu-item :index='item.lesson'>
                                <router-link :to="{name:'hellomelody',params:{name:'hellomelody',lesson:index+1}}">{{item.lesson}}</router-link>
                            </el-menu-item>
                        </div>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">Here We Go</template>
                        <div v-for='(item,index) in item'>
                            <el-menu-item :index='item.lesson'>
                                <router-link :to="{name:'hellomelody',params:{name:'herewego',lesson:index+1}}">{{item.lesson}}</router-link>
                            </el-menu-item>
                        </div>
                    </el-submenu>
                </el-menu>
            </el-header>
        </el-container>
        <el-main>
            <div class="line"></div>
            <router-view />
        </el-main>
        
    </div>
</template>
<style>
.el-header,
.el-footer {
    color: #333;
    text-align: center;
}

.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.el-main {
    color: #333;
    text-align: center;
}

body>.el-container {
    margin-bottom: 40px;
}



.router-link-active{
text-decoration: none;
}
a {
text-decoration: none;
}
</style>
<script>
export default {
    name: 'app',
    components: {
    },
    data() {
        return {
            item: [{ lesson: '第一册' }, { lesson: '第二册' }, { lesson: '第三册' }, { lesson: '第四册' }, { lesson: '第五册' }, { lesson: '第六册' }],
            activeIndex: ''
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            // console.log(key, keyPath);
        }
    }
}
</script>