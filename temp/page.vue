<template>
  <div>
    <pagination-table
      ref="{{lowerName}}List"
      :table-columns="tableColumns"
      :get-list-url="'/sys/{{lowerName}}/list'"
      :delete-url="''"
      :saveOrUpdateUrl="'/sys/{{lowerName}}'"
      :getFormDataUrl="'/sys/{{lowerName}}/view'"
      :useDefaultOperate="false"
      :addOrUpdateDialogWidth="'30%'"
      :onlyCanSaveAndChange="true"
    >

    </pagination-table>

  </div>
</template>

<script>
import PaginationTable from '@/components/pagination-table'

export default {
  data () {
    return {
      tableColumns: [
        {
          prop: 'id',
          width: '80',
          label: 'ID',
          notInForm: true
        }
      ].map(a => ({ ...a, ...{ headerAlign: "center", align: "center" } }))

    }
  },
  components: {
    PaginationTable
  },
  methods: {
  }
}
</script>

<style>

</style>
