<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #2d8cf0;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    float: left;
    top: 15px;
    left: 10px;
    margin: 0 auto;
    margin-left: 10px;
}
.layout-nav{
    width: 220px;
    margin: 0 auto;
    margin-right: 10px;
    float:right;
}
.layout-footer-center{
    text-align: center;
}
</style>

<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1" >
                    <div class="layout-logo">
                        <Avatar :src="logoUrl" ></Avatar>
                        <font face="微软雅黑" size="5" color="#ffffff" style="font-weight:bold">&nbsp; 快速搭建基于Vue的SPA环境</font>
                    </div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="md-log-in" />
                            顶部选项样例
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Content :style="{padding: '0 0px'}">
                <!-- 内部界面 -->
                <slot name="page_content"></slot>
            </Content>
            <Footer class="layout-footer-center">
                <Divider />
                <font color="#808695">2019 &copy; 快速搭建基于Vue的SPA环境</font>
            </Footer>
        </Layout>
    </div>
</template>

<script type="text/javascript">
    import Logo from '../pics/logo.png';
    import {Store} from '../store.js';
    import axios from 'axios';

    export default {
        name:"WindowFrame",
        provide:function(){
            return {
                gFrameWindow:this
            }
        },
        data:function(){
            return {
                logoUrl:Logo
            }
        },
        methods:{
            
        },
        computed:{
            
        },
        components:{
            
        }
    }
</script>