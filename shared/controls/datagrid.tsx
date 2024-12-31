import React, { useState, useEffect } from "react";
import { Tooltip } from '@mui/material';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import {
    Search as SearchIcon, Phone as PhoneIcon, Notes as NotesIcon, Delete as DeleteIcon,
    CancelPresentation as CancelIcon, Refresh as RefreshIcon, Done as DoneIcon
} from '@mui/icons-material';

const ROWSPERPAGE = [5, 10, 15, 20, 25];

const DataGridComponent = (props) => {

    const {
        keyId, columns, rowsCount, rows, pageInfo,
        rowHeight, columnHeight,
        sx, noActions, hideFooter, sortBy, pageMode,
        onSortClicked, onPageClicked, onActionClicked, onColumnClicked } = props;

    const paginationMode = pageMode || "server";

    const [gridPageInfo, setGridPageInfo] = useState({ page: 0, pageSize: 10 });

    const OnActionClicked = (id, type) => {
        if (onActionClicked) onActionClicked(id, type);
    };

    const RenderGridActions = () => {
        return {
            field: 'actions', headerName: 'Actions', type: 'actions', flex: 1,
            getActions: ({ row }) => {

                const actions: unknown[] = [];

                actions.push(
                    <GridActionsCellItem
                        key={'view'}
                        icon={
                            <Tooltip title="View Session" arrow>
                                <SearchIcon />
                            </Tooltip>
                        }
                        label="View"
                        className="textPrimary"
                        color="inherit"
                        onClick={() => OnActionClicked(row[keyId], 'view')}
                    />
                );

                actions.push(
                    <GridActionsCellItem
                        key={'contact'}
                        icon={
                            <Tooltip title="Contact Details" arrow>
                                <PhoneIcon />
                            </Tooltip>
                        }
                        label="Contact"
                        className="textPrimary"
                        color="inherit"
                        onClick={() => OnActionClicked(row[keyId], 'contact')}
                    />
                );

                actions.push(
                    <GridActionsCellItem
                        key={'notes'}
                        icon={
                            <Tooltip title="Notes" arrow>
                                <NotesIcon />
                            </Tooltip>
                        }
                        label="Notes"
                        className="textPrimary"
                        color="inherit"
                        onClick={() => OnActionClicked(row[keyId], 'notes')}
                    />
                );

                actions.push(
                    <GridActionsCellItem
                        key={'cancel'}
                        icon={
                            <Tooltip title="Cancel Session" arrow>
                                <CancelIcon />
                            </Tooltip>
                        }
                        label="Cancel"
                        className="textPrimary"
                        color="inherit"
                        onClick={() => OnActionClicked(row[keyId], 'cancel')}
                    />
                );

                actions.push(
                    <GridActionsCellItem
                        key={'delete'}
                        icon={
                            <Tooltip title="Delete Pending Session" arrow>
                                <DeleteIcon />
                            </Tooltip>
                        }
                        label="Delete"
                        className="textPrimary"
                        color="inherit"
                        onClick={() => OnActionClicked(row[keyId], 'delete')}
                    />
                );

                actions.push(
                    <GridActionsCellItem
                        key={'reschedule'}
                        icon={
                            <Tooltip title="Reschedule Session" arrow>
                                <RefreshIcon />
                            </Tooltip>
                        }
                        label="Reschedule"
                        className="textPrimary"
                        color="inherit"
                        onClick={() => OnActionClicked(row[keyId], 'reschedule')}
                    />
                );

                actions.push(
                    <GridActionsCellItem
                        key={'schedule'}
                        icon={
                            <Tooltip title="Schedule Session" arrow>
                                <DoneIcon />
                            </Tooltip>
                        }
                        label="Schedule"
                        className="textPrimary"
                        color="inherit"
                        onClick={() => OnActionClicked(row[keyId], 'schedule')}
                    />
                );

                return actions;
            }
        };

    }

    const handleSortModelChange = (e) => {
        if (onSortClicked) onSortClicked(e[0]);
    }

    const handlePaginationModel = (e) => {
        if (onPageClicked) onPageClicked(e);
    }

    const GetColumns = () => {
        if (noActions) return [...columns];
        return [...columns, RenderGridActions()];
    }

    const GetRowId = (row) => {
        return row.jobId;
    }

    useEffect(() => {
        if (pageInfo) {
            setGridPageInfo(pageInfo);
        }
    }, [pageInfo]);

    return (
        <>
            <DataGrid
                columnHeaderHeight={columnHeight}
                rowHeight={rowHeight}
                getRowId={GetRowId}
                columns={GetColumns()}
                rowCount={rowsCount}
                rows={rows}
                hideFooter={hideFooter || false}
                paginationModel={gridPageInfo}
                initialState={{
                    pagination: {
                        paginationModel: gridPageInfo,
                    },
                }}
                pageSizeOptions={ROWSPERPAGE}
                sortModel={sortBy && [sortBy] || [{ field: "", sort: "asc" }]}
                paginationMode={paginationMode}
                sortingMode={paginationMode}
                onSortModelChange={handleSortModelChange}
                onPaginationModelChange={handlePaginationModel}
                checkboxSelection
                disableColumnMenu
                disableColumnSelector
                disableRowSelectionOnClick
                sx={{
                    '& .MuiTablePagination-input, & .MuiTablePagination-selectLabel': {
                        display: 'none !important'
                    },
                    "& .MuiDataGrid-cell:focus-within, & .MuiDataGrid-cell:focus": {
                        outline: "none !important",
                    },
                    '& .MuiDataGrid-columnHeader:focus-within, & .MuiDataGrid-columnHeader:focus': {
                        outline: 'none !important',
                    },
                    '& .MuiDataGrid-columnSeparator': {
                        display: 'none',
                    },
                    '& .MuiDataGrid-columnHeaderTitle': {
                        whiteSpace: 'nowrap'
                    },
                    ...sx
                }}
                onCellClick={(params, event) => {
                    event.defaultMuiPrevented = true;
                    const { field, row, colDef } = params;
                    if (onColumnClicked) onColumnClicked({ field, row, type: colDef["ctype"] });
                }}
            />
        </>
    );

};

export default DataGridComponent;