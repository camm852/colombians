import { useMemo } from 'react';
import useData from '../hooks/useData';
import { IData, IDataContext } from '../react-app-env';

//MRT Imports
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';

//Material UI Imports
import { ListItemIcon, MenuItem } from '@mui/material';

//Icons Imports
import { AccountCircle } from '@mui/icons-material';

//Mock Data

const ListDetained = ({ data }: { data: IData[] }) => {
  const columns = useMemo<MRT_ColumnDef<IData>[]>(
    () => [
      {
        id: 'detained', //id used to define `group` column
        header: 'Detenidos en el extranjero',
        columns: [
          {
            accessorFn: (row) => `${row.fecha_publicaci_n}`, //accessorFn used to join multiple data into a single cell
            id: 'fecha', //id is still required when using accessorFn instead of accessorKey
            header: 'Fecha publicación',
            size: 250,
            accessorKey: 'fecha_publicaci_n', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            filterVariant: 'date',
          },
          {
            accessorKey: 'delito', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            enableClickToCopy: true,
            filterVariant: 'autocomplete',
            header: 'Tipo delito',
            size: 300,
          },
          {
            accessorKey: 'situaci_n_jur_dica', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            enableClickToCopy: true,
            filterVariant: 'autocomplete',
            header: 'Situacion juridica',
            size: 300,
          },
          {
            accessorKey: 'pais_prisi_n', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            enableClickToCopy: true,
            filterVariant: 'autocomplete',
            header: 'País',
            size: 300,
          },
          {
            accessorKey: 'grupo_edad', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            enableClickToCopy: true,
            filterVariant: 'autocomplete',
            header: 'Grupo de edad',
            size: 300,
          },
        ],
      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    enableColumnFilterModes: true,
    enableColumnOrdering: true,
    enableGrouping: true,
    enableColumnPinning: true,
    enableFacetedValues: true,
    enableRowActions: true,
    initialState: { showColumnFilters: true, showGlobalFilter: true },
    paginationDisplayMode: 'pages',
    positionToolbarAlertBanner: 'bottom',
    muiSearchTextFieldProps: {
      size: 'small',
      variant: 'outlined',
    },
    muiPaginationProps: {
      color: 'secondary',
      rowsPerPageOptions: [10, 20, 30],
      shape: 'rounded',
      variant: 'outlined',
    },

    renderRowActionMenuItems: ({ closeMenu }) => [
      <MenuItem
        key={0}
        onClick={() => {
          // View profile logic...
          closeMenu();
        }}
        sx={{ m: 0 }}
      >
        <ListItemIcon>
          <AccountCircle />
        </ListItemIcon>
        Mirar detenido
      </MenuItem>,
    ],
  });

  return <MaterialReactTable table={table} />;
};

//Date Picker Imports - these should just be in your Context Provider
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const ListDetainedWithLocalizationProvider = () => {
  //App.tsx or AppProviders file

  const { data, status, error } = useData() as IDataContext;

  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  if (status === 'error') {
    return <div>{error.message}</div>;
  } else {
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ListDetained data={data} />
      </LocalizationProvider>
    );
  }
};

export default ListDetainedWithLocalizationProvider;
