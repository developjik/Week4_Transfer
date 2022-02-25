import React, { useState, useEffect, useContext, SyntheticEvent } from 'react';
import type { FC } from 'react';
import fileSize from 'filesize';
import { DataInterface, FileInterface } from 'common/interface';
import { TableRow } from 'common/styles';
import TableDataInfo from 'components/TableData/TableDataInfo';
import TableDataTitle from 'components/TableData/TableDataTitle';

const TEXTS = ['파일개수', '파일사이즈', '유효기간', '받은사람'];

const TableData: FC<DataInterface> = (data: DataInterface) => {
  const expireState =
    (data.expires_at + 2700000) * 1000 - new Date().getTime() > 0
      ? false
      : true;

  const dataFileSize = fileSize(
    data.files.reduce((acc: number, cur: FileInterface) => acc + cur.size, 0)
  );

  const tableDataInfoDatas = [
    { count: data.count },
    { fileSize: dataFileSize },
    { expiresAt: data.expires_at },
    { downloadCount: data.download_count },
  ];

  return (
    <TableRow key={data.key}>
      <TableDataTitle
        key={data.key}
        thumbnailUrl={data.thumbnailUrl}
        summary={data.summary}
        expireState={expireState}
      />

      {tableDataInfoDatas.map((tableDataInfoData, index) => {
        return (
          <TableDataInfo
            text={TEXTS[index]}
            key={index}
            id={data.key}
            count={tableDataInfoData.count}
            fileSize={tableDataInfoData.fileSize}
            expiresAt={tableDataInfoData.expiresAt}
            downloadCount={tableDataInfoData.downloadCount}
          />
        );
      })}
    </TableRow>
  );
};

export default TableData;
