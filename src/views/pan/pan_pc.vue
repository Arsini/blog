<template>
    <div class="pan">
        <ul class="functions" flex>
            <li>
                <el-upload
                    action="/pan/upload"
                    :show-file-list='false'
                    :on-progress='progress'
                    :on-success='success'
                    :before-upload='beforeUpload'
                    multiple
                >
                    <span>点击上传</span>
                </el-upload>
            </li>
            <li @click="del">删除全部</li>
            <li>percent: {{ percent }}</li>
        </ul>
        <ul class="file_list" v-loading="loading">
            <li v-for="item in files" :key="item">{{ item }}</li>
        </ul>
        <!-- <el-upload
            action="/pan/upload"
            name="file"
            drag
        >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>
        <button @click="del">删除</button> -->
    </div>
</template>

<script>
    import mixin from './mixin'
    export default {
        mixins: [mixin],
        data() {
            return {
                percent: 0
            }
        },
        methods:{
            progress(event){
                this.percent = (event.percent).toFixed(2)
            },
            beforeUpload(file){
                console.log(file)
            },
            success(){
                this.getFiles()
            }
        }
    }
</script>

<style lang="postcss" scoped>
    .pan{
        background-color: #fff;
    }
    .functions{
        border-bottom: 1px solid#ddd;
        padding: 0 30px;
        line-height: 40px;
        li{
            width: 100px;
            cursor: pointer;
            text-align: center;
        }
    }
    .file_list{
        min-height: 300px;
        li{
            padding: 0 30px;
            line-height: 46px;
            border-bottom: 1px solid #f0f0f0;
        }
    }
</style>