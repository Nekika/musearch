<template>
    <div>
        <RecordList :id="id"></RecordList>
        <ReleaseList :id="id"></ReleaseList>
    </div>
</template>

<script>
    import RecordList from "../components/RecordList";
    import ReleaseList from "../components/ReleaseList";
    export default {
        name: "Artist",
        props: ['id'],
        components: {
            RecordList,
            ReleaseList
        }
    }
</script>

<style scoped>

</style>