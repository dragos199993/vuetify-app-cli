<template>
    <v-container grid-list-xl text-xs-center>
        <v-layout row wrap>
            <v-flex md12 lg6 offset-lg3 class="mt-5">
                <v-text-field class="mb-3"
                @keyup.enter="addNewItem"
                v-model="newItem"
                v-validate="'required|min:2|max:30'"
                prepend-icon="local_grocery_store" 
                name="newItem" 
                :error-messages="errors.collect('newItem')"
                data-vv-name="newItem"
                label="Add new item"
                ></v-text-field>
                <v-list subheader>
                    <v-subheader>Items in your list</v-subheader>
                    <Item v-for="(item, index) in fetchedItems" 
                    :key="index" 
                    :title="item.title" 
                    :id="item._id"
                    :checked="item.checked"/>
                </v-list>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Item from '../components/Item';
import Axios from 'axios';
import { mapMutations, mapGetters } from 'vuex';
const url = require('../helpers/urls');

export default {
    data: () => ({
        newItem: '',
        items: []
    }),
    created(){
        Axios.get(url.items).then( res => {
            this.fetchContent(res.data)
        })
    },
    computed: {
        ...mapGetters('content', ['fetchedItems'])
    },
    methods: {
        ...mapMutations('content', {
            fetchContent: 'FETCH_CONTENT'
        }),
        addNewItem(){
            this.$validator.validateAll().then(noError => {
                if(noError){
                    this.$store.dispatch('content/ADD_NEW_ITEM', {
                        title: this.newItem
                    })
                }
            })
        }
    },
    components: {
        Item
    }
}
</script>
