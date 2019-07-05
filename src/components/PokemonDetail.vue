<template>
    <div class="card" v-if="info">
        <div class="card-head">
            <h3>#{{info.id}} <span class="cap">{{info.species.name}}</span></h3>
        </div>
        <div class="card-body">

            <div class="text-right">
                <router-link to="/pokemon">&lt; Back</router-link>
            </div>

            <div class="top-info">
                <img :src="info.sprites.front_default" />
                <!-- <img :src="info.sprites.back_default" /> -->
                <span class="types">
                    <span v-for="(type, index) in types" :key="index" class="cap type">
                        <span
                        class="class"
                        :class="{
                            normal:type.type.name=='normal',
                            fire:type.type.name=='fire',
                            fighting:type.type.name=='fighting',
                            water:type.type.name=='water',
                            flying:type.type.name=='flying',
                            grass:type.type.name=='grass',
                            poison:type.type.name=='poison',
                            electric:type.type.name=='electric',
                            ground:type.type.name=='ground',
                            psychic:type.type.name=='psychic',
                            rock:type.type.name=='rock',
                            ice:type.type.name=='ice',
                            bug:type.type.name=='bug',
                            dragon:type.type.name=='dragon',
                            ghost:type.type.name=='ghost',
                            dark: type.type.name=='dark',
                            steel: type.type.name=='steel',
                            fairy: type.type.name=='fairy'
                        }">{{type.type.name}}</span>
                        <span v-if="index != info.types.length-1">/ </span>
                    </span>
                    <br />Height: {{info.height/10}}m
                    <br />Weight: {{info.weight/10}}kg
                    <br />Base Exp: {{info.base_experience}}
                </span>

                <table>
                    <thead>
                        <tr>
                            <th colspan="2">Base Stats</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th class="hp">HP</th>
                            <td>{{info.stats[5].base_stat}}</td>
                        </tr>
                        <tr>
                            <th class="atk">Attack</th>
                            <td>{{info.stats[4].base_stat}}</td>
                        </tr>
                        <tr>
                            <th class="def">Defense</th>
                            <td>{{info.stats[3].base_stat}}</td>
                        </tr>
                        <tr>
                            <th class="satk">Special Attack</th>
                            <td>{{info.stats[2].base_stat}}</td>
                        </tr>
                        <tr>
                            <th class="sdef">Special Defense</th>
                            <td>{{info.stats[1].base_stat}}</td>
                        </tr>
                        <tr>
                            <th class="spd">Speed</th>
                            <td>{{info.stats[0].base_stat}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h5>Abilities</h5>
            <ul class="cap">
                <li v-for="(ability, index) in abilities" :key="index">{{ability.ability.name}}</li>
                <li v-for="(hidden, index) in hiddenAbility" :key="index" class="hidden">{{hidden.ability.name}} (hidden)</li>
            </ul>
            <div v-if="encounters">
            <h5>Encounters</h5>
                <table>
                    <thead>
                        <tr>
                            <th>Location</th>
                            <th>Details</th>
                        </tr>                    
                    </thead>
                    <tbody v-for="(encounter, index) in encounters" :key="index">
                        <tr>
                            <th>{{encounter.location_area}}</th>
                            <td>
                                <div v-for="(version, index) in encounter.version_details" :key="index">
                                    Max Chance: {{version.max_chance}}
                                    <ul>
                                        <li v-for="(details, index) in version.encounter_details" :key="index">
                                            Level: {{details.min_level}} - {{details.max_level}}
                                            Method: {{details.method.name}}
                                            Chance: {{details.chance}}
                                            <ul>
                                                <li v-for="(condition, index) in details.condition_values" :key="index">{{condition}}</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "PokemonDetail",
    props: ["info"],
    data() {
        return {
            encounters: []
        }
    },
    methods: {
        
    },
    created: function() {
        axios.get(this.info.location_area_encounters)
        .then(res => this.encounters = res.data)
    },
    computed: {
        types: function() {            
            return this.info.types.slice().sort((a, b) => a.slot - b.slot);
        },
        hiddenAbility: function() {
            return this.info.abilities.filter(a => a.is_hidden == true);
        },
        abilities: function() {
            return this.info.abilities.filter(a => a.is_hidden != true).slice().sort((a, b) => a.slot - b.slot);
        }
    }
}
</script>

<style scoped>
    img {
        width: 128px;
        float: left;
    }
    table thead th {
        text-align: center;
    }
    .top-info {
        display: grid;
        grid-template-columns: 128px 1fr;
        grid-template-rows: 128px 1fr;
    }
    .top-info table {
        grid-column: span 2;
    }
    h5 {
        text-align: center;
    }
    ul {
        list-style-type: none;
    }
    .hidden {
        color: #999;
    }
    @media screen and (min-width: 651px) {
        .top-info {
            grid-template-columns: 140px 1fr;
            grid-template-rows: 128px 1fr;
        }
        .top-info table {
            grid-column: 2 / -1;
            grid-row: 1 / -1;
        }
    }
</style>
