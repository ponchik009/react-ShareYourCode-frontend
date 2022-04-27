import React from "react";
import { Typography, CircularProgress } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { IGroup } from "../../../interfaces/entities";
import { api } from "../../../api";
import { useAppSelector } from "../../../hooks/hooks";
import GroupInside from "./GroupInside";
import GroupPromo from "./GroupPromo";

const ViewGroupPage = () => {
  const { groupId } = useParams();
  const [group, setGroup] = React.useState<IGroup | null>(null);
  const navigate = useNavigate();

  const { user } = useAppSelector((state) => state.auth);

  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleCreateTred = () => {
    navigate(`/groups/${groupId}/treds/create`);
  };

  const handleEnter = () => {
    setIsLoading(true);
    api.group
      .enter(+groupId!)
      .then((data) => {
        setGroup(data);
        setError("");
      })
      .catch((err) => setError(err.message))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleGenerateLink = () => {
    const error: Promise<string> = api.group
      .generateLink(group!.id)
      .then((data) =>
        setGroup({
          ...group,
          ...data,
        } as IGroup)
      )
      .catch((err) => err.message);
    return error;
  };

  const handleInvite = (email: string) => {
    const error: Promise<string> = api.group
      .invite(group!.id, email)
      .then(setGroup)
      .catch((err) => err.message);
    return error;
  };

  React.useEffect(() => {
    // запрос на получение группы
    setIsLoading(true);
    api.group
      .getGroup(+groupId!)
      .then((data) => {
        setGroup(data);
        setError("");
      })
      .catch((err) => setError(err.message))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="page">
      {isLoading ? (
        <CircularProgress />
      ) : group ? (
        group.members.some((member) => member.id === user?.id) ? (
          <GroupInside
            isAdmin={group.admin.id === user?.id}
            handleCreateTred={handleCreateTred}
            group={group}
            handleInvite={handleInvite}
            handleGenerateLink={handleGenerateLink}
          />
        ) : (
          <GroupPromo group={group} handleEnter={handleEnter} />
        )
      ) : (
        <Typography>{error}</Typography>
      )}
    </div>
  );
};

export default ViewGroupPage;
