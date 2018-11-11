<template>
    <v-list-tile>
        <v-list-tile-action class="mt-2">
            <v-checkbox v-model="itemChecked" slot="activator"></v-checkbox>
        </v-list-tile-action>

        <v-list-tile-content>
            <v-list-tile-title>{{ title }}</v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action @click="deleteItem(id, index)">
            <v-tooltip top>
                <v-btn icon ripple slot="activator">
                    <v-icon color="grey lighten-1">delete</v-icon>
                </v-btn>
                <span>Delete {{ title }}</span>
            </v-tooltip>
        </v-list-tile-action>
    </v-list-tile>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    props: ['title', 'checked', 'id', 'index'],
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
        }),
        deleteItem(id, index){
            this.$store.dispatch('content/DELETE_ITEM', {
                id: this.id,
                index: this.index
            })
        }
    }
}
</script>
