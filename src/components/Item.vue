<template>
    <v-list-tile>
        <v-list-tile-action class="mt-2">
            <v-checkbox v-model="itemChecked"></v-checkbox>
        </v-list-tile-action>

        <v-list-tile-content>
            <v-list-tile-title>{{ title }}</v-list-tile-title>
        </v-list-tile-content>
    </v-list-tile>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    props: ['title', 'checked'],
    computed: {
        itemChecked: {
            get(){
                return this.checked
            },
            set(){
                this.checkItem();
            }
        }
    },
    methods: {
        ...mapMutations('content', {
            checkItem: 'CHECK_ITEM'
        })
    }
}
</script>
