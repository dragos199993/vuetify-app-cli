<template>
    <v-container grid-list-xl text-xs-center>
        <v-layout row wrap>
            <v-flex md12 lg6 offset-lg3 class="mt-5">
                <v-list subheader>
                    <v-subheader>Hangout notifications</v-subheader>
                    <Item v-for="(item, index) in items" :key="index" :title="item.title" :checked="item.checked"/>
                </v-list>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Item from '../components/Item';
import Axios from 'axios';

const url = 'http://localhost:5000/api/';

export default {
    data: () => ({
        items: []
    }),
    created(){
        Axios.get(`${url}items`).then( res => {
            this.items = res.data
        })
    },
    components: {
        Item
    }
}
</script>
