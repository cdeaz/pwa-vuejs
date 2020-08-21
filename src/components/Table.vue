<template>
    <section class="table table-striped">
       <div class="table-responsive"> 
        <table class="table table-striped"> 
            <thead>
                <tr>
                    <th v-for="(obj, ind) in config" :key="ind">
                        {{ obj.title }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in theData" :key="index">
                    <td v-for="(obj, ind) in config" :key="ind">
                        <span v-if="obj.type === 'text'">{{row[obj.key]}}</span>
                        <span v-if="obj.type === 'date'">{{new Date(row[obj.key]).toLocaleDateString()}} </span>
                        <figure v-if="obj.type === 'image'">
                            <img :src="row[obj.key]" height="60px">
                        </figure>
                    </td>
                </tr>
            </tbody>
        </table>
       </div>
    </section>
</template>

<script>
export default {
    props: ['theData', 'config'],
}
</script>

<style lang="scss">

.btn-outline-success {
    color: #3b28a7;
    border-color: #3b28a7;
}

.table {
    width: 100%;
    margin-bottom: 1rem;
    color: #505050;
}

</style>