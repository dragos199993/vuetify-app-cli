<template>
    <v-progress-linear v-if="loading" class="loading" color="info" :indeterminate="true"></v-progress-linear>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters('helpers', ['loading'])
    }
}
</script>
