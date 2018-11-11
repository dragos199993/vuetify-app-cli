<template>
    <v-container grid-list-xl text-xs-center>
        <v-layout row wrap>
            <v-flex md12 lg6 offset-lg3>
                <v-list subheader two-line>
                    <v-subheader>Hangout notifications</v-subheader>
                    <v-list-tile>
                    <v-list-tile-action>
                        <v-checkbox></v-checkbox>
                    </v-list-tile-action>

                    <v-list-tile-content>
                        <v-list-tile-title>Notifications</v-list-tile-title>
                        <v-list-tile-sub-title>Allow notifications</v-list-tile-sub-title>
                    </v-list-tile-content>
                    </v-list-tile>

                    <v-list-tile>
                    <v-list-tile-action>
                        <v-checkbox></v-checkbox>
                    </v-list-tile-action>

                    <v-list-tile-content>
                        <v-list-tile-title>Sound</v-list-tile-title>
                        <v-list-tile-sub-title>Hangouts message</v-list-tile-sub-title>
                    </v-list-tile-content>
                    </v-list-tile>

                    <v-list-tile>
                    <v-list-tile-action>
                        <v-checkbox></v-checkbox>
                    </v-list-tile-action>

                    <v-list-tile-content>
                        <v-list-tile-title>Video sounds</v-list-tile-title>
                        <v-list-tile-sub-title>Hangouts video call</v-list-tile-sub-title>
                    </v-list-tile-content>
                    </v-list-tile>

                    <v-list-tile>
                    <v-list-tile-action>
                        <v-checkbox></v-checkbox>
                    </v-list-tile-action>

                    <v-list-tile-content>
                        <v-list-tile-title>Invites</v-list-tile-title>
                        <v-list-tile-sub-title>Notify when receiving invites</v-list-tile-sub-title>
                    </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-flex>
        </v-layout>
    </v-container>
</template>
