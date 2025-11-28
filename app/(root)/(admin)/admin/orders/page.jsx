'use client'
import BreadCrumb from "@/components/ui/Application/Admin/BreadCrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {ADMIN_COUPON_ADD, ADMIN_COUPON_EDIT, ADMIN_DASHBOARD, ADMIN_ORDER_DETAILS, ADMIN_TRASH } from "@/routes/AdminPanelRoute"
import {FiPlus} from "react-icons/fi"
import Link from "next/link"
import DatatableWrapper from "@/components/ui/Application/Admin/DatatableWrapper"
import { useCallback, useMemo } from "react"
import { DT_ORDER_COLUMN } from "@/lib/column"
import EditAction from "@/components/ui/Application/Admin/EditAction"
import DeleteAction from "@/components/ui/Application/Admin/DeleteAction"
import { columnConfig } from "@/lib/helperFunction"
import ViewAction from "@/components/ui/Application/Admin/ViewAction"

const breadcrumbData = [
    {href: ADMIN_DASHBOARD, label: 'Home'},
    {href: "", label: 'Orders'},
    
]

const ShowOrder = () => {

  const columns = useMemo(()=>{
    return columnConfig(DT_ORDER_COLUMN)
  }, [])


  const action = useCallback((row,deleteType, handleDelete) =>{
    let actionMenu = []
    actionMenu.push(<ViewAction key="view" href={ADMIN_ORDER_DETAILS(row.original.order_id)} />)
    actionMenu.push(<DeleteAction key="delete" handleDelete={handleDelete} row={row} deleteType={deleteType} />)
    return actionMenu
  }, [])


  return (
    <div>
       <BreadCrumb breadcrumbData={breadcrumbData} />

      <Card className="py-0 rounded shadow-sm gap-0">
        <CardHeader className="pt-3 px-3 border-b [.border-b]:pb-2">
          <div className="flex justify-between items-center">
          <h4 className="text-xl font-semibold">Orders</h4>
        
          </div>
        </CardHeader>

        <CardContent className=" px-0">
            <DatatableWrapper
            queryKey="orders-data"
            fetchUrl="/api/orders"
            initialPageSize={10}
            columnsConfig={columns}
            exportEndpoint="/api/orders/export"
            deleteEndpoint="/api/orders/delete"
            deleteType="SD"
            trashView={`${ADMIN_TRASH}?trashof=orders`}
            createAction={action}
            />
        </CardContent>
      </Card>
    </div>
  )
}

export default ShowOrder