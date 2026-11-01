<template>
  <div class="article-page">
    <div
      v-for="(item,index) in articles"
      :key="item.id"
      @click="$router.push(`/detail/${item.id}`)"
      class="article-item"
      >
      <div class="head">
        <img src="http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png" alt="" />
        <div class="con">
          <p class="title">{{ item.title }}</p>
          <p class="other">青春, 那么骚 | 2022-01-20|{{ index+1 }}|{{ item.id }}|{{ item.userId }}</p>
        </div>
      </div>
      <div class="body">
         {{ item.body }}  
      </div>
      <div class="foot">点赞 44 | 浏览 315</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

// 请求地址: https://mock.boxuegu.com/mock/3083/articles
// 请求方式: get
export default {
  name: 'ArticlePage',
  data () {
    return {
      articles:[]
    }
  },
  async created(){
    const res=await axios.get('https://jsonplaceholder.typicode.com/posts')
    // console.log(res.data);
    this.articles=res.data
    
  }
}
</script>

<style lang="less" scoped>
.article-page {
  background: #f5f5f5;
}
.article-item {
  margin-bottom: 10px;
  background: #fff;
  padding: 10px 15px;
  .head {
    display: flex;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
    .con {
      flex: 1;
      overflow: hidden;
      padding-left: 15px;
      p {
        margin: 0;
        line-height: 1.5;
        &.title {
          text-overflow: ellipsis;
          overflow: hidden;
          width: 100%;
          white-space: nowrap;
        }
        &.other {
          font-size: 10px;
          color: #999;
        }
      }
    }
  }
  .body {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .foot {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }
}
</style>