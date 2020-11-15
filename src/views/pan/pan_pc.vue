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
            <li></li>
            <!-- <li @click="del">删除全部</li> -->
            <!-- <li>percent: {{ percent }}</li> -->
        </ul>
        <el-table :data="files" border>
            <el-table-column prop="name" label="文件名"></el-table-column>
            <el-table-column prop="size" label="大小" sortable></el-table-column>
            <el-table-column prop="type" label="类型" sortable></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <!-- <a :href="`/pan/download?fileName=${scope.row.name}`" target="_blank">下载</a> -->
                    <el-button
                    size="mini"
                    @click="downFile(scope.row.name, scope.row.folder)">下载</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    @click="del(scope.row.name, scope.row.folder)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pop" v-show="isProgress">
            <ul>
                <li v-for="item in uploadList" :key="item.uid">
                    <p>{{ item.name }}</p>
                    <el-progress
                        :percentage="item.percent? item.percent : 0"
                        :format="format"
                        status="success"
                    ></el-progress>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import mixin from './mixin'
    export default {
        mixins: [mixin],
        data() {
            return {
                percent: 0,
                uploadList: [],
                isProgress: false,
            }
        },
        methods:{
            progress(event, file){
                for (let i = 0; i < this.uploadList.length; i++) {
                    const el = this.uploadList[i];
                    if(el.uid == file.uid){
                        el.percent = parseInt(event.percent)
                        this.$set(this.uploadList, i, el)
                        break;
                    }
                }
            },
            beforeUpload(file){
                this.uploadList.push(file)
                this.isProgress = true
            },
            success(){
                this.getFiles()
                this.isProgress = false
            },
            format(percentage) {
                return percentage === 100 ? '满' : `${percentage}%`;
            }
        },
        
    }
</script>

<style lang="postcss" scoped>
    .pan{
        background-color: #fff;
    }
    .functions{
        padding: 0 30px;
        line-height: 40px;
        li{
            width: 100px;
            cursor: pointer;
            text-align: center;
        }
    }
    .pop{
        padding: 20px 0 20px 30px;
        width: 400px;
        background: #fff;
        position: fixed;
        margin: auto;
        top: 12vh;
        left: 0;
        right: 0;
        box-shadow: 0 4px 10px #ddd;
    }
</style>